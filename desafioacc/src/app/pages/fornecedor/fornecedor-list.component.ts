import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../models/fornecedor.model';
import { FornecedorService } from '../../services/fornecedor.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html'
})
export class FornecedorListComponent implements OnInit {
  fornecedor: Fornecedor[] = [];

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit(): void {
    this.fornecedorService.getAll().subscribe(data => this.fornecedor = data);
  }
}