import dbConnect from "db/connect";
import User from "db/models/user";
import Exercice from "db/models/exercice";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const id = session?.user?._id;
  if (request.method === "GET") {
    //the user is now connected to the session by the id
    const user = await User.findById(id).populate("exerciceUser");
    return response.status(200).json(user);
  }
  if (request.method === "POST") {
    const exerciceToUpdate = request.body;
    const user = await User.findById(id);
    console.log("user id from api:", user);
    /* const exerciceData = await Exercice.find(exerciceToUpdate._id); */
    const exerciceData = new Exercice(exerciceToUpdate);
    /*  const exerciceData = await Exercice.findById({ id: exerciceToUpdate.id }); */

    user.exerciceUser.push(exerciceData);

    await exerciceData.save();
    await user.save();

    return response.status(201).json({ status: "user exercice created" });
  }
}
