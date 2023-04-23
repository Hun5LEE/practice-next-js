import { connectDB } from "../../../util/database";

connectDB;

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.password === ""
    ) {
      return res.status(500).json("미입력");
    }
    try {
      const db = (await connectDB).db("forum");
      const existingUser = await db
        .collection("user")
        .findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(500).json("이미 존재하는 이메일입니다.");
      }
      await db.collection("user").insertOne(req.body);
      return res.status(200).redirect("/");
    } catch (err) {
      console.log(err);
    }
  }
}

// 처리성공시엔 status(200) , 실패시 status(500), 서버기능 처리실패시(유저잘못)status(400)
// 응답과 동시에 페이지 이동시키려면 redirect() 사용
