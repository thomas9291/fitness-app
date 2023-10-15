import dbConnect from "db/connect";
import Exercice from "db/models/exercice";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const admin = session?.user?.email === "thomas.jubinsolis@gmail.com";
  const userId = session?.user?._id;

  if (request.method === "GET") {
    const exercices = await Exercice.find({ user: "64f1d7d5057425b87161398a" });
    return response.status(200).json(exercices);
  }
  if (request.method === "POST") {
    try {
      if (admin) {
        const exerciceData = request.body;
        const exercice = new Exercice(exerciceData);
        exercice.user = userId;
        await exercice.save();
        return response.status(201).json({ status: "Exercice created" });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
