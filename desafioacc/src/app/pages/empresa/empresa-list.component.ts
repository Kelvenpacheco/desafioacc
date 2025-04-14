import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { Empresa } from '../../models/empresa.model';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html'
})
export class EmpresaListComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresaService.getAll().subscribe(data => this.empresas = data);
  }
}