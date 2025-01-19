"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Confetti from "react-confetti-boom";

export default function Thanks() {
  return (
    <div className="flex flex-col h-screen overflow-hidden w-full container mx-auto justify-center items-center relative">
      <div className="absolute top-1/2 left-[35%] transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <Confetti mode="boom" particleCount={100} />
      </div>
      <h1 className="text-4xl font-bold">Parabéns!</h1>
      <p className="text-xl mt-8">
        Você agora pode começar a comprar peças e fazer cotações de peças
        online!
      </p>
      <Link href={"/"} className="text-xl mt-8">
        <Button className="w-full">Voltar para Home</Button>
      </Link>
    </div>
  );
}
