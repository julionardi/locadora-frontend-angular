import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'controle-acervo', loadChildren: () => import('./controle-acervo/controle-acervo.module').then(m => m.ControleAcervoModule)},
  {path: 'atendimento-cliente', loadChildren: () => import('./atendimento-cliente/atendimento-cliente.module').then(m => m.AtendimentoClienteModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
