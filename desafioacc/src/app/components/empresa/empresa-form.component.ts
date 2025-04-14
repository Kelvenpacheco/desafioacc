import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmpresaService } from "../../services/empresa.service";

@Component({ /* ... */ })
export class EmpresaFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private empresaService: EmpresaService) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cnpj: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.empresaService.create(this.form.value).subscribe();
    }
  }
}
