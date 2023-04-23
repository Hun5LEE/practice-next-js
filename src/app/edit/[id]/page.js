import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>글수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <h4>제목</h4>
        <input name="title" defaultValue={result.title} />
        <h4>글내용</h4>
        <input name="content" defaultValue={result.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">게시하기</button>
      </form>
    </div>
  );
}

// document 수정은 updateOne()
