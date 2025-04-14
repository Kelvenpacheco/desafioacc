import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmpresaService {
  private api = 'http://localhost:3000/empresas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.api);
  }

  getById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.api}/${id}`);
  }

  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.api, empresa);
  }

  update(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.api}/${empresa.id}`, empresa);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
