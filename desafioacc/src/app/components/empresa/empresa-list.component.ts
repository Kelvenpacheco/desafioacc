import { Component, OnInit } from "@angular/core";
import { Empresa } from "../../models/empresa.model";
import { EmpresaService } from "../../services/empresa.service";

@Component({ /* ... */ })
export class EmpresaListComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
    this.empresaService.getAll().subscribe(data => this.empresas = data);
  }
}
