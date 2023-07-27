import dbConnect from "db/connect";
import Exercice from "db/models/exercice";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (!id) {
    return response.status(404).json({ status: "Not Found" });
  }
  if (request.method === "GET") {
    const exercice = await Exercice.findById(id)?.populate("input");

    if (!exercice || !exercice._id) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(exercice);
  }
}
