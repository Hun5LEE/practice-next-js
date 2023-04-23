import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      return res.status(500).json("미입력");
    }
    try {
      let date = new Date();
      let todayDate = `${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일 `;
      const db = (await connectDB).db("forum");
      const result = await db.collection("post").insertOne({
        title: `${req.body.title}`,
        content: `${req.body.content}`,
        date: `${todayDate}`,
      });
      return res.status(200).redirect("/list");
    } catch (err) {
      console.log("에러");
    }
  }
}

// 처리성공시엔 status(200) , 실패시 status(500), 서버기능 처리실패시(유저잘못)status(400)
// 응답과 동시에 페이지 이동시키려면 redirect() 사용
