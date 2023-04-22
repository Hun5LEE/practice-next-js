import { connectDB } from "../../util/database";
import styles from "./page.module.css";

export default async function Home() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <div>
      <h4 className="title">study</h4>
      <p className="title-sub">by dev lee</p>
    </div>
  );
}

// page.js 보여줄때 - 동작원리
// 1. 옆에 layout.js 있으면 그걸로 page.js를 감쌈
// 2. 상위폴더에 layout.js 있으면 그걸로 1번 싸맴

// next-js는 같은 데이터요청이 여러개면 1개로 압축해줌.

// 이미지 최적화 (lazy loading, 사이즈최적화, layout shift방지 ...)
// 방법 -> 이미지 import 해서 사용

// 글목록페이지
// 1. HTML페이지 만들기
// 2. 페이지 방문시 DB에서 글 꺼내오기
// 3. 글들을 HTML에 꽂아넣기

// dynamic route 만들려면 [폴더명]
