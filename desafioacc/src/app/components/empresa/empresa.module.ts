import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaListComponent } from './empresa-list.component';
import { EmpresaFormComponent } from './empresa-form.component';


const routes: Routes = [
  { path: '', component: EmpresaListComponent },
  { path: 'nova', component: EmpresaFormComponent },
  { path: 'editar/:id', component: EmpresaFormComponent }
];

@NgModule({
  declarations: [
    EmpresaListComponent,
    EmpresaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule.forRoot([])
  ]
})
export class EmpresaModule { }
