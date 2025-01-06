import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/application/Header";

export default function About() {
  return (
    <section className="bg-background body-font overflow-hidden">
      <div className="container mx-auto">
        <Header />
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-foreground mt-20">
            Sobre Nós
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-muted-foreground">
            Conheça mais sobre a Peças Online e nossa missão de fornecer as
            melhores soluções para o seu negócio.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="h-full bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-medium title-font mb-4 text-foreground">
                Nossa História
              </h2>
              <p className="leading-relaxed mb-4 text-muted-foreground">
                Fundada em 2010, a Peças Online começou como uma pequena loja
                local e cresceu para se tornar uma das principais fornecedoras
                de peças automotivas do Brasil. Nossa jornada é marcada por
                inovação, qualidade e compromisso com a satisfação do cliente.
              </p>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="h-full bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-medium title-font mb-4 text-foreground">
                Nossa Missão
              </h2>
              <p className="leading-relaxed mb-4 text-muted-foreground">
                Nossa missão é fornecer peças automotivas de alta qualidade e
                soluções inovadoras para nossos clientes, contribuindo para a
                segurança e eficiência do setor automotivo brasileiro.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/contact">
            <Button className="text-primary-foreground bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary/90 rounded text-lg">
              Entre em Contato
            </Button>
          </Link>
        </div>
      </div>
      <footer className="text-center py-8 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Peças Online. Todos os direitos
          reservados.
        </p>
      </footer>
    </section>
  );
}
