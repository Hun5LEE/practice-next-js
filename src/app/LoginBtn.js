"use client";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ session }) {
  return session ? (
    <span>
      {session?.user?.name}
      <button onClick={() => signOut()}>로그아웃</button>
    </span>
  ) : (
    <button onClick={() => signIn()}>로그인</button>
  );
}
