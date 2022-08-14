import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleAcervoRoutingModule } from './controle-acervo-routing.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    ControleAcervoRoutingModule
  ]
})
export class ControleAcervoModule { }
