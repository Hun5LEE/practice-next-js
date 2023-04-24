import { connectDB } from "../../../util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.password === ""
    ) {
      return res.status(500).json("가입거절");
    } else {
      const db = (await connectDB).db("forum");
      const user = await db
        .collection("user_cred")
        .findOne({ email: req.body.email });
      if (user) {
        return res.status(500).json("로그인중임");
      }
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;
      const result = await db.collection("user_cred").insertOne(req.body);
      return res.status(200).json("가입성공");
    }
  }
}
