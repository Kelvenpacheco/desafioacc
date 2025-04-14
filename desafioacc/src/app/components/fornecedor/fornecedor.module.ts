import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorListComponent } from './fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor-form.component';


const routes: Routes = [
  { path: '', component: FornecedorListComponent },
  { path: 'nova', component: FornecedorFormComponent },
  { path: 'editar/:id', component: FornecedorFormComponent }
];

@NgModule({
  declarations: [
    FornecedorListComponent,
    FornecedorFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule.forRoot([])
  ]
})
export class FornecedorModule { }
