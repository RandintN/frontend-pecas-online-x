"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STATES } from "@/utils/States";

export default function RegisterSuplierForm() {
  const [cnpj, setCnpj] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/^(\d{3})(\d{5})(\d{4})$/, "($1) $2-$3");
  };

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNPJ(e.target.value);
    setCnpj(formatted);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <form className="space-y-8 max-w-2xl mx-auto p-6 rounded-lg shadow">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Informações da Empresa</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input id="empresa" placeholder="Nome da empresa" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nome-fantasia">Nome fantasia</Label>
            <Input id="nome-fantasia" placeholder="Nome fantasia" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="concessionario">Concessionário</SelectItem>
                <SelectItem value="distribuidor">Distribuidor</SelectItem>
                <SelectItem value="fabricante">Fabricante</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="marcas">Marcas</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent id="marcas">
                <SelectItem value="1">Agripe</SelectItem>
                <SelectItem value="2">Agralle</SelectItem>
                <SelectItem value="3">Ajusa</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input
              id="cnpj"
              placeholder="xx.xxx.xxx/xxxx-xx"
              value={cnpj}
              onChange={handleCNPJChange}
              maxLength={18}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inscricao">Inscrição Estadual</Label>
            <Input id="inscricao" placeholder="Número de inscrição estadual" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Endereço</h2>
        <div className="space-y-2">
          <Label htmlFor="endereco">Endereço</Label>
          <Input id="endereco" placeholder="Endereço completo" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cidade">Cidade</Label>
            <Input id="cidade" placeholder="Cidade" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="estado">Estado</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                {STATES.map((state) => (
                  <SelectItem
                    key={state.id}
                    id={state.id.toString()}
                    value={state.sigla}
                  >
                    {state.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cep">C.E.P</Label>
            <Input id="cep" placeholder="xxxxx-xxx" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bairro">Bairro</Label>
            <Input id="bairro" placeholder="Bairro" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Contato</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fone-pecas">Fone peças</Label>
            <Input
              id="fone-pecas"
              placeholder="(xxx) xxxxx-xxxx"
              value={phoneNumber}
              onChange={handlePhoneChange}
              maxLength={15}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp-pecas">Whatsapp peças</Label>
            <Input
              id="whatsapp-pecas"
              placeholder="(xxx) xxxxx-xxxx"
              value={phoneNumber}
              onChange={handlePhoneChange}
              maxLength={15}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp">Whatsapp</Label>
          <Input
            id="whatsapp"
            placeholder="(xxx) xxxxx-xxxx"
            value={phoneNumber}
            onChange={handlePhoneChange}
            maxLength={15}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">E-mails</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email-pecas">E-mail Peças</Label>
            <Input
              id="email-pecas"
              type="email"
              placeholder="email@exemplo.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-estoque">E-mail de envio de estoque</Label>
            <Input
              id="email-estoque"
              type="email"
              placeholder="email@exemplo.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email-contas">E-mail contas a pagar</Label>
            <Input
              id="email-contas"
              type="email"
              placeholder="email@exemplo.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-nota-fiscal">
              E-mail para receber nota fiscal
            </Label>
            <Input
              id="email-nota-fiscal"
              type="email"
              placeholder="email@exemplo.com"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Informações Adicionais</h2>
        <div className="space-y-2">
          <Label htmlFor="website">WebSite</Label>
          <Input
            id="website"
            type="url"
            placeholder="https://www.exemplo.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vendedores">Nome dos vendedores de peças</Label>
          <Textarea
            id="vendedores"
            placeholder="Liste os nomes dos vendedores"
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Enviar Formulário
      </Button>
    </form>
  );
}
