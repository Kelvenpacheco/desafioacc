import { Empresa } from "./empresa.model";

export interface Fornecedor {
  id?: number;
  nome: string;
  cpf?: string;
  cnpj?: string;
  rg?: string;
  dataNascimento?: string;
  tipo: 'PF' | 'PJ';
  empresas?: Empresa[];
}
