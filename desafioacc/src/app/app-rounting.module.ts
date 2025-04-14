import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empresa',
    loadChildren: () => import('./components/empresa/empresa.module').then(m => m.EmpresaModule)
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('./components/fornecedor/fornecedor.module').then(m => m.FornecedorModule)
  },
  {
    path: '',
    redirectTo: '/empresa',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/empresa'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
