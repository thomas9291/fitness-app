import dbConnect from "db/connect";
import Exercice from "db/models/exercice";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  /* const newArr = []; */
  const admin = session?.user?.name === "thomas jubin";
  /* const id = session?.user?._id; */
  if (request.method === "GET") {
    const exercices = await Exercice.find();
    return response.status(200).json(exercices);
  }
  if (request.method === "POST") {
    try {
      if (admin) {
        const exerciceData = request.body;
        console.log("execice data from api:", exerciceData);
        /*  newArr.push(exerciceData.muscle);
        exerciceData.muscle = newArr; */
        //when I add an exercise the user must have its property
        /* exerciceData.user = id; */
        const exercice = new Exercice(exerciceData);
        await exercice.save();
        return response.status(201).json({ status: "Exercice created" });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
