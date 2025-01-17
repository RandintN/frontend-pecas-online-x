"use client";
import { useRouter } from "next/navigation";

export default function AuthPage({ params }: { params: { token: string } }) {
  const { token } = params;

  localStorage.setItem("token", token);

  const router = useRouter();
  router.push("/");

  return <div></div>;
}
