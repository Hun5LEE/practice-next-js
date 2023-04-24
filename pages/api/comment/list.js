import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = (await connectDB).db("forum");
    const result = await db
      .collection("comment")
      .find({ parentId: new ObjectId(req.query) })
      .toArray();
    return res.status(200).json(result);
  }
}
