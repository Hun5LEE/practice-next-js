"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Comment({ data: { params }, user }) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(`/api/comment/list?id=${params.id}`);
        setCommentList(data);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(commentList);
  const handleText = (e) => {
    setComment(e.target.value);
  };

  const handleSend = async () => {
    try {
      await axios.post("/api/comment/new", {
        comment: comment,
        parentId: params.id,
      });
      // 댓글전송시 실시간으로 댓글보이게함.
      const { data } = await axios.get(`/api/comment/list?id=${params.id}`);
      setCommentList(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h3>댓글란</h3>
          {commentList.map((comment, i) => {
            return (
              <p key={i}>
                {comment.comment} / <span>{comment.author}</span>
              </p>
            );
          })}
          <input onChange={(e) => handleText(e)} />
          <button onClick={() => handleSend()}>댓글전송</button>
        </>
      ) : (
        <>
          <h1>로그인후 댓글 작성가능합니다</h1>
          <h3>댓글란</h3>
          {commentList.map((comment, i) => {
            return (
              <p key={i}>
                {comment.comment} / <span>{comment.author}</span>
              </p>
            );
          })}
        </>
      )}
    </div>
  );
}

// DB에 저장시 애매한부분이 생겼을때 -> 나중에 수정, 삭제, 출력이 용이한가?를 중점으로 두기.
// -> 따로 document로 뺴면용이함.
