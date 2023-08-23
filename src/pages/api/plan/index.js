import dbConnect from "db/connect";
import User from "db/models/user";
import Exercice from "db/models/exercice";
import Plan from "db/models/plan";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  const userId = session?.user?._id;
  if (request.method === "GET") {
    //the user is now connected to the session by the id
    const plans = await Plan.find({}).populate("exerciceUser");
    return response.status(200).json(plans);
  }
  if (request.method === "POST") {
    try {
      if (userId) {
        const exerciceToUpdate = request.body;

        console.log("exercice to update from plan api:", exerciceToUpdate);

        const userPlanId = await User.findById(userId);
        const userExercice = new Exercice(exerciceToUpdate);
        const userPlan = await Plan({ _id: userExercice._id });

        /* userPlan.name = exerciceToUpdate.name;
        userPlan.type = exerciceToUpdate.type;
        userPlan.muscle = exerciceToUpdate.muscle;
        userPlan.equipment = exerciceToUpdate.equipment;
        userPlan.maxValue = +exerciceToUpdate.maxValue;
        userPlan.images = exerciceToUpdate.images;
        userPlan.result = exerciceToUpdate.result;
        userPlan.user = userId; */

        userPlan.exerciceUser.push(userExercice);
        userPlanId.plans.push(exerciceToUpdate);
        console.log("user plan from plan api:", userPlanId);

        console.log("plans exercice from api plan:", userPlan);

        await userPlanId.save();
        await userPlan.save();

        return response.status(201).json({ status: "user exercice created" });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
