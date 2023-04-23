import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const db = (await connectDB).db("forum");
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      if (result.deleteCount === 0) {
        return res.status(500).json("failed to delete");
      }
      return res.status(200).json("DELETE SUCCESSFUL");
    } catch (err) {
      console.log("에러");
    }
  }
}
