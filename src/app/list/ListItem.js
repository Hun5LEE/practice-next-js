"use client";

import Link from "next/link";
import axios from "axios";

export default function ListItem({ result }) {
  // 서버로 삭제요청 보냄.
  const handleDelete = async (post, e) => {
    try {
      const { data, status } = await axios.delete(`/api/delete/${post._id}`, {
        data: post._id,
      });
      e.target.parentElement.style.opacity = 0;
      setTimeout(() => {
        e.target.parentElement.style.display = "none";
      }, 1000);
      // if(status === 200) {
      //   return
      // } else {
      // 서버가 에러코드 전송시 실행할코드
      // }
    } catch (err) {
      // 인터넷문제등으로 실패시 실행할코드
      console.log(err);
    }
  };

  return (
    <div>
      {result?.map((post, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${post._id}`}>
              <h4>{post.title}</h4>
            </Link>
            <Link href={`/edit/${post._id}`}>✏️</Link>
            <span onClick={(e) => handleDelete(post, e)}>🗑️</span>
            <p>{post.date}</p>
          </div>
        );
      })}
    </div>
  );
}

// client component에 짠코드는 유저에 전달이 되기때문에 db로 직접 요청하지않고 서버에 부탁해서 가져옴
// 단점: useEffect 검색노출 어려움. -> 이럴경우 props로 전달하면 DB내용을 미리 채워서 보내줌
// fetch('url?key=value&key=value') -> query string(장점 간단함, GET요청도 데이터 전송가능) (단점: 보안, 직관적이지않음)
// 서버파일도 URL파라미터 문법 이용가능

// o기호는 static rendering으로 유저에게 기존의 build할때 만든 html을 그대로 보내줌 (전송이빠름)
// 람다기호는 dynamic rendering으로 유저가 페이지 접속마다 html을 새로 만들어서 보so줌
