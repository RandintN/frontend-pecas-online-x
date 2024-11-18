import { Cog, Wrench } from "lucide-react";
import React from "react";

export default function LoadingWrench() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative [transform:scaleX(-1)]">
        <Wrench className="animate-wrench h-12 w-12 z-10" />
      </div>
    </div>
  );
}
