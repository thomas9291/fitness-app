import dbConnect from "db/connect";
import User from "db/models/user";
/* import Exercice from "db/models/exercice"; */
import Plan from "db/models/plan";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const { id } = request.query;
  const userId = session?.user?._id;
  if (request.method === "GET") {
    //the user is now connected to the session by the id
    const plans = await Plan.find({ user: userId }).populate("exerciceUser");
    return response.status(200).json(plans);
  }
  if (request.method === "POST") {
    try {
      if (userId) {
        const exerciceToUpdate = request.body.filteredId[0];

        console.log("exercice to update from plan api:", exerciceToUpdate);

        const userPlanId = await User.findById(userId);
        console.log("user id from pla api:", userPlanId);
        const userPlan = new Plan(exerciceToUpdate);
        console.log("user plan from plan api:", userPlan);

        userPlan.exerciceUser.push(exerciceToUpdate);

        userPlanId.plans.push(userPlan);

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
