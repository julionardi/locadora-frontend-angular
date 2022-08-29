import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncluirNovoAtorService } from '../services/incluir-novo-ator.service';

import { Ator } from '../model/ator';

//export interface Ator {
//  id: string;
//  nome: string;
//}

//const ELEMENT_DATA: Ator[] = [
//  {id: 1, nome: 'João'},
//  {id: 2, nome: 'Maria'},
//  {id: 3, nome: 'José'},
//  {id: 4, nome: 'Pedro'},
//];

@Component({
  selector: 'app-listagem-atores',
  templateUrl: './listagem-atores.component.html',
  styleUrls: ['./listagem-atores.component.scss']
})

export class ListagemAtoresComponent implements OnInit {

  //atores = ELEMENT_DATA;

  atores : Ator[];

  servico : IncluirNovoAtorService;
  
  displayedColumns: string[] = ['id', 'nome', 'acoes'];

    

  constructor(private router: Router, auxServico : IncluirNovoAtorService) { 
    
    this.servico = auxServico;

    this.atores = this.servico.obterListaAtores();
    
  }

  ngOnInit(): void {

  }

  onIncluirNovoAtor(){

      console.log("Realizado: onIncluirNovoAtor");

      this.router.navigate(['controle-acervo/incluir-novo-ator']);

  }

  onAlterarAtor(){

    console.log("Realizado: onAlterarAtor");

    this.router.navigate(['controle-acervo/alterar-ator']);

  }

  onExcluirAtor(){

    console.log("Realizado: onExcluirNovoAtor");

    //this.router.navigate(['controle-acervo/incluir-novo-ator']);

  }

}
