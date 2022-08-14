import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoClienteRoutingModule } from './atendimento-cliente-routing.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    AtendimentoClienteRoutingModule
  ]
})
export class AtendimentoClienteModule { }
