import { Fornecedor } from "./Fornecedor";

export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  preco_estimado: number;
  fornecedores: Fornecedor[];
}
