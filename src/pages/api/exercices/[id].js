import dbConnect from "db/connect";
import Exercice from "db/models/exercice";
import Input from "db/models/input";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
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
    const exercice = await Exercice.findById(id);
    const inputData = new Input(inputToUpDate);
    inputData.exerciceInput = exercice;
    exercice.result.push(inputData);
    await inputData.save();
    await exercice.save();

    return response.status(201).json({ status: "Input created" });
  }
}
