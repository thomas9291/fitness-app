import dbConnect from "db/connect";
import User from "db/models/user";
import Exercice from "db/models/exercice";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  const userId = session?.user?._id;
  if (request.method === "GET") {
    //the user is now connected to the session by the id
    const userPlans = await User.findOne({ _id: userId })
      .populate("planWeek1")
      .populate("planWeek2")
      .populate("planWeek3")
      .populate("planWeek4");
    console.log("user plan from pla api:", userPlans);
    return response.status(200).json(userPlans);
  }
  if (request.method === "POST") {
    try {
      if (userId) {
        console.log("request body from plan api:", request.body);
        const exerciceToUpdate = request.body.filteredId;

        const newExercice = await new Exercice({
          name: exerciceToUpdate.name,
          type: exerciceToUpdate.type,
          muscle: exerciceToUpdate.muscle,
          equipment: exerciceToUpdate.equipment,
          images: exerciceToUpdate.images,
          maxValue: exerciceToUpdate.maxValue,
          week: exerciceToUpdate.week,
        });
        newExercice.user = userId;

        console.log("new exercice from plan api:", newExercice);

        const userPlanId = await User.findById({ _id: userId });

        if (exerciceToUpdate.week === "week1") {
          userPlanId.planWeek1.push(newExercice);
        }
        if (exerciceToUpdate.week === "week2") {
          userPlanId.planWeek2.push(newExercice);
        }
        if (exerciceToUpdate.week === "week3") {
          userPlanId.planWeek3.push(newExercice);
        }
        if (exerciceToUpdate.week === "week4") {
          userPlanId.planWeek4.push(newExercice);
        }

        await Promise.all([userPlanId.save(), newExercice.save()]);

        return response.status(201).json({ status: "user exercice created" });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
