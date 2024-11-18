import LoadingWrench from "@/components/application/LoadingWrench";
import RegisterSuplierForm from "@/components/application/RegisterSuplierForm";
import React from "react";

export default function RegisterSuplierPage() {
  return (
    <div className="flex flex-col h-screen w-full container mx-auto">
      <RegisterSuplierForm />
    </div>
  );
}
