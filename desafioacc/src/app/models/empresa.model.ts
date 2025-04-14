import { Fornecedor } from "./fornecedor.model";

export interface Empresa {
  id?: number;
  nome: string;
  cnpj: string;
  estado: string;
  fornecedores?: Fornecedor[];
}
