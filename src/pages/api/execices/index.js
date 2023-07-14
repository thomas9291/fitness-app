import dbConnect from "db/connect";
import Exercice from "db/models/exercice";

export default async function Handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const exercices = await Exercice.find();
      return response.status(200).json(exercices);
    }
    if (request.method === "POST") {
      const exerciceData = request.body;

      const exercice = new Exercice(exerciceData);
      await exercice.save();
      return response.status(201).json({ status: "Exercice created" });
    }
  } catch (error) {
    console.log(error);
    return response.status(400).json({ error: error.message });
  }
}
