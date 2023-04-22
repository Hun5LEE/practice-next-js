import Link from "next/link";
import { connectDB } from "../../../util/database";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((post, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${post._id}`}>
              <h4>{post.title}</h4>
            </Link>
            <DetailLink />
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
