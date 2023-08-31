import dbConnect from "db/connect";
import User from "db/models/user";
import Exercice from "db/models/exercice";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { uid } from "uid";

export default async function Handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  const userId = session?.user?._id;
  if (request.method === "GET") {
    //the user is now connected to the session by the id
    const userPlans = await User.findOne({ _id: userId }).populate("plans");
    console.log("user plan from pla api:", userPlans);
    return response.status(200).json(userPlans.plans);
  }
  if (request.method === "POST") {
    try {
      if (userId) {
        const exerciceToUpdate = request.body.filteredId;
        exerciceToUpdate.user = userId;

        console.log("exercice to update from plan api:", exerciceToUpdate);

        const userPlanId = await User.findById({ _id: userId });

        userPlanId.plans.push(exerciceToUpdate);
        console.log("user plan from plan api:", userPlanId);
        console.log("newExercice from plan api:", exerciceToUpdate);

        await userPlanId.save();

        return response.status(201).json({ status: "user exercice created" });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
