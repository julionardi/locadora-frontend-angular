import { Injectable } from '@angular/core';
import { ListagemAtoresComponent } from '../listagem-atores/listagem-atores.component';

import { Ator } from '../model/ator';

@Injectable({
  providedIn: 'root'
})
export class IncluirNovoAtorService {

  constructor() { }

  incluirNovoAtor(){

    //this.router.navigate(['controle-acervo/alterar-ator']);

    console.log("Realizado: Incluir Novo Ator - Service");

  }

  obterListaAtores(){

    const ELEMENT_DATA: Ator[] = [
      {id: 1, nome: 'João'},
      {id: 2, nome: 'Maria'},
      {id: 3, nome: 'José'},
      {id: 4, nome: 'Pedro'},
    ];

    return ELEMENT_DATA;

  }

  excluirAtor(){


  }

  alterarAtor(){


  }

  obterDadosAtor(){


  }


}
