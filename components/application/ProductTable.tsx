import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Produto } from "@/interfaces/Produto";

export default async function ProductTable() {
  const response = await fetch(
    "https://novopeasonlinemockserver-hhewbs9p.b4a.run/v1/pecas"
  );
  const parts: Produto[] = await response.json();

  return (
    <div className="overflow-x-auto p-4 sm:p-6">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs sm:text-sm">ID</TableHead>
            <TableHead className="text-xs sm:text-sm">Nome</TableHead>
            <TableHead className="text-xs sm:text-sm">Categoria</TableHead>
            <TableHead className="text-xs sm:text-sm">Descrição</TableHead>
            <TableHead className="text-xs sm:text-sm">Preço Estimado</TableHead>
            <TableHead className="text-xs sm:text-sm">Fornecedores</TableHead>
            <TableHead className="text-xs sm:text-sm">Contato</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parts.map((part) => (
            <TableRow key={part.id}>
              <TableCell className="text-xs sm:text-sm">{part.id}</TableCell>
              <TableCell className="text-xs sm:text-sm">{part.nome}</TableCell>
              <TableCell className="text-xs sm:text-sm">
                {part.categoria}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {part.descricao}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                R$ {part.preco_estimado.toFixed(2)}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {part.fornecedores.map((fornecedor) => (
                  <div key={fornecedor.id}>{fornecedor.nome}</div>
                ))}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {part.fornecedores.map((fornecedor) => (
                  <div key={fornecedor.id}>{fornecedor.telefone}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
