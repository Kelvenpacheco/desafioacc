import { Component, OnInit } from "@angular/core";
import { Fornecedor } from "../../models/fornecedor.model";
import { FornecedorService } from "../../services/fornecedor.service";

@Component({ /* ... */ })
export class FornecedorListComponent implements OnInit {
  fornecedor: Fornecedor[] = [];

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit() {
    this.fornecedorService.getAll().subscribe(data => this.fornecedor = data);
  }
}
