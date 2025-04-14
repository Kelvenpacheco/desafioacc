import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor.model';

@Injectable({ providedIn: 'root' })
export class FornecedorService {
  private api = 'http://localhost:3000/empresas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.api);
  }

  getById(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.api}/${id}`);
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.api, fornecedor);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.api}/${fornecedor.id}`, fornecedor);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
