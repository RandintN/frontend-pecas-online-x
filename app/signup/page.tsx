import GoogleIcon from "@/components/application/GoogleIcon";
import Header from "@/components/application/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col h-screen  w-full container mx-auto">
      <Header />
      <div className="flex h-screen w-full items-center justify-center px-4">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Crie uma conta</CardTitle>
            <CardDescription>
              Insira email e senha para criar uma conta
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-6">
              <Button variant="outline">
                <GoogleIcon />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="nome@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirme sua senha</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Criar conta</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
