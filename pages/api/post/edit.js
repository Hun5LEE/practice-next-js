import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let session = await getServerSession(req, res, authOptions);
      if (session) {
        if (req.body.title === "" || req.body.content === "") {
          return res.status(500).json("미입력");
        }
        const copyReq = { title: req.body.title, content: req.body.content };
        const db = (await connectDB).db("forum");
        await db
          .collection("post")
          .updateOne({ _id: new ObjectId(req.body._id) }, { $set: copyReq });
        return res.status(200).redirect("/list");
      }
      return res.status(500).json("로그인하시오");
    } catch (err) {
      console.log("에러");
    }
  }
}

// 처리성공시엔 status(200) , 실패시 status(500), 서버기능 처리실패시(유저잘못)status(400)
// 응답과 동시에 페이지 이동시키려면 redirect() 사용
