import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export default async function Write() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <div className="p-20">
          <h4>글작성</h4>
          <form action="/api/post/new" method="POST">
            <h4>제목</h4>
            <input name="title" placeholder="글제목" />
            <h4>글내용</h4>
            <input name="content" placeholder="글내용" />
            <button type="submit">게시하기</button>
          </form>
        </div>
      ) : (
        <h1>로그인하세요</h1>
      )}
    </>
  );
}
