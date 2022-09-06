import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleAcervoRoutingModule } from './controle-acervo-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ListagemAtoresComponent } from './listagem-atores/listagem-atores.component';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { IncluirNovoAtorComponent } from './incluir-novo-ator/incluir-novo-ator.component';

import {MatIconModule} from '@angular/material/icon';
import { AlterarAtorComponent } from './alterar-ator/alterar-ator.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InicioComponent,
    ListagemAtoresComponent,
    IncluirNovoAtorComponent,
    AlterarAtorComponent
  ],
  imports: [
    CommonModule,
    ControleAcervoRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ControleAcervoModule { }
