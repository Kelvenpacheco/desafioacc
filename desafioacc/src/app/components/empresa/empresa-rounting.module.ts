import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaListComponent } from './empresa-list.component';
import { EmpresaFormComponent } from './empresa-form.component';

const routes: Routes = [
  { path: '', component: EmpresaListComponent },
  { path: 'novo', component: EmpresaFormComponent },
  { path: 'editar/:id', component: EmpresaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
