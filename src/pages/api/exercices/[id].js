import dbConnect from "db/connect";
import Exercice from "db/models/exercice";
import Input from "db/models/input";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

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
    inputToUpDate.serie = +inputToUpDate.serie;
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
    exercice.result.push(inputData);
    await inputData.save();
    await exercice.save();

    return response.status(201).json({ status: "Input created" });
  }
}
