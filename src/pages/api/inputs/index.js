import dbConnect from "db/connect";
import Input from "db/models/input";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (!id) {
    return response.status(404).json({ status: "Not Found" });
  }
  if (request.method === "POST") {
    const inputToUpDate = request.body;
    const input = new Input(inputToUpDate);
    await input.save();

    return response.status(201).json({ status: "Input created" });
  }
}
