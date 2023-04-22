"use client";
import { useRouter } from "next/navigation";

export default function DetailLink() {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back("/")}>이동</button>
    </>
  );
}

// 뒤로가기 .back() , 앞으로가기 forward(), 바뀐내용 새로고침 refresh()
// 페이지 미리로드는 prefetch() (Link태그에도 prefetch 기능이 내장되어있음.)
