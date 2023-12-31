import dbConnect from "db/connect";
import Exercice from "db/models/exercice";
import Input from "db/models/input";
const mongoose = require("mongoose");

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  const session = await getServerSession(request, response, authOptions);
  const userId = session?.user?._id;

  function getSerie(key) {
    const pourcentageRep = {
      1: 10,
      3: 9,
      5: 8.5,
      10: 7.5,
      20: 6,
    };

    return pourcentageRep[key];
  }
  //make sure thas nobody can connect without a session from postman for exemple!

  if (!id) {
    return response.status(404).json({ status: "Not Found" });
  }
  if (request.method === "GET") {
    const exercice = await Exercice.findById(id).populate("result");

    if (!exercice || !exercice._id) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(exercice);
  }
  if (request.method === "POST") {
    const inputToUpDate = request.body;
    inputToUpDate.weight = +inputToUpDate.weight;
    inputToUpDate.reps = +inputToUpDate.reps;
    inputToUpDate.serieTarget = +inputToUpDate.serieTarget;
    const targetSerie = getSerie(inputToUpDate.serieTarget);

    let a = inputToUpDate.weight * inputToUpDate.reps;
    let b = a * 0.0333;
    let rm = b + inputToUpDate.weight;
    let c = rm / 10;
    let targetSerieFinal = c * targetSerie;
    let d = targetSerieFinal / 10;
    let adaptationCalcul = Math.round(d * 10.5);

    const exercice = await Exercice.findById(id);
    const inputData = new Input(inputToUpDate);
    inputData.repMax = rm;
    inputData.serieTarget = inputToUpDate.serieTarget;
    inputData.adaptation = adaptationCalcul;

    inputData.exerciceInput = exercice;
    inputData.user = userId;
    exercice.result.push(inputData);

    /* await inputData.save(); */
    await Promise.all([exercice.save(), inputData.save()]);

    return response.status(201).json({ status: "Input created" });
  }

  if (request.method === "DELETE") {
    const planToDelete = await Exercice.findByIdAndDelete(id);
    response.status(200).json(planToDelete);
  }
}
