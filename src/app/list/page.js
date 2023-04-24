import Link from "next/link";
import { connectDB } from "../../../util/database";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

// dynamic rendering으로 바꾸려면 아래코드 작성 , static하고 싶으면 dynamic대신 static
// export const dynamic = "force-dynamic";

// 페이지단위 캐싱사용시 아래코드 사용
// export const revalidate = 60;

export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
      <DetailLink />
    </div>
  );
}

// dynamic rendering 단점 : 서버/DB부담 up -> 캐싱기능 사용해서 보완
// fetch('/URL', { cache: 'force-cache' }) 캐싱된 결과를 가져옴
// fetch('/URL', { cache: 'no-store' })  실시간 데이터 필요시
// fetch('/URL', { next: { revalidate: 60 } }) ex) 60초마다 캐싱데이터 갱신
// 캐싱된거 확인할려면 개발용서버가 아니라 실제 서버열기.

// social로그인 기능 사용하고싶으면 oAuth방법사용
