import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncluirNovoAtorComponent } from './incluir-novo-ator/incluir-novo-ator.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListagemAtoresComponent } from './listagem-atores/listagem-atores.component';

const routes: Routes = [

  {path: '', component: InicioComponent },
  {path: 'listagem-atores', component: ListagemAtoresComponent},
  {path: 'incluir-novo-ator', component: IncluirNovoAtorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControleAcervoRoutingModule { }
