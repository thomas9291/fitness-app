import dbConnect from "db/connect";
import User from "db/models/user";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const id = session?.user?._id;
  if (request.method === "GET") {
    //the user is now connected to the session by the id
    const user = await User.find({ _id: id });
    return response.status(200).json(user);
  }
}
