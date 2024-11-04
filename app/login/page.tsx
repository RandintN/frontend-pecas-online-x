import Header from "@/components/application/Header";
import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex flex-col h-screen w-full container mx-auto">
      <Header />
      <div className="flex h-screen w-full items-center justify-center px-4">
        <LoginForm />
      </div>
    </div>
  );
}
