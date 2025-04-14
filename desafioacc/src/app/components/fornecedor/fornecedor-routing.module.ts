import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorListComponent } from './fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor-form.component';

const routes: Routes = [
  { path: '', component: FornecedorListComponent },
  { path: 'novo', component: FornecedorFormComponent },
  { path: 'editar/:id', component: FornecedorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
