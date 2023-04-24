import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await getServerSession(req, res, authOptions);
      if (
        req.body.content !== "" &&
        req.body.parent !== "" &&
        req.body.email !== ""
      ) {
        const db = (await connectDB).db("forum");
        await db.collection("comment").insertOne({
          comment: req.body.comment,
          author: session.user.email,
          parentId: new ObjectId(req.body.parentId),
        });
        return res.status(200).json("성공");
      }
      return res.status(500).json("실패");
    } catch (err) {
      console.log("에러");
      return res.status(500).json("실패");
    }
  }
  return res.status(500).json("실패");
}
