import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FornecedorService } from "../../services/fornecedor.service";

@Component({ /* ... */ })
export class FornecedorFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private fornecedorService: FornecedorService) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      tipoPessoa: ['FISICA', Validators.required],
      cpfCnpj: ['', Validators.required],
      rg: [''],
      dataNascimento: [''],
      empresas: [[]]
    });
  
    this.form.get('tipoPessoa')?.valueChanges.subscribe((tipo) => {
      if (tipo === 'FISICA') {
        this.form.get('rg')?.setValidators(Validators.required);
        this.form.get('dataNascimento')?.setValidators(Validators.required);
      } else {
        this.form.get('rg')?.clearValidators();
        this.form.get('dataNascimento')?.clearValidators();
      }
  
      this.form.get('rg')?.updateValueAndValidity();
      this.form.get('dataNascimento')?.updateValueAndValidity();
    });
  }
  
}
