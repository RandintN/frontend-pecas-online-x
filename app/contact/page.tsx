import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="bg-background body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-foreground mt-20">
            Entre em Contato
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-md text-muted-foreground">
            Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos
            em contato o mais breve possível.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <Input
                type="text"
                placeholder="Nome"
                className="w-full bg-muted"
              />
            </div>
            <div className="p-2 w-1/2">
              <Input
                type="email"
                placeholder="Email"
                className="w-full bg-muted"
              />
            </div>
            <div className="p-2 w-full">
              <Input
                type="text"
                placeholder="Assunto"
                className="w-full bg-muted"
              />
            </div>
            <div className="p-2 w-full">
              <Textarea
                placeholder="Mensagem"
                className="w-full bg-muted h-32"
              />
            </div>
            <div className="p-2 w-full">
              <Button className="flex mx-auto text-primary-foreground bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary/90 rounded text-lg">
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
