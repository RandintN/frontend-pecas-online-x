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
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Preço Estimado</TableHead>
            <TableHead>Fornecedores</TableHead>
            <TableHead>Contato</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parts.map((part) => (
            <TableRow key={part.id}>
              <TableCell>{part.id}</TableCell>
              <TableCell>{part.nome}</TableCell>
              <TableCell>{part.categoria}</TableCell>
              <TableCell>{part.descricao}</TableCell>
              <TableCell>R$ {part.preco_estimado.toFixed(2)}</TableCell>
              <TableCell>
                {part.fornecedores.map((fornecedor) => (
                  <div key={fornecedor.id}>{fornecedor.nome}</div>
                ))}
              </TableCell>
              <TableCell>
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
