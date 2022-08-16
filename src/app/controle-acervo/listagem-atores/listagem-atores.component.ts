import { Component, OnInit } from '@angular/core';

export interface Ator {
  id: string;
  nome: string;
}

const ELEMENT_DATA: Ator[] = [
  {id: '1', nome: 'João'},
  {id: '2', nome: 'Maria'},
  {id: '3', nome: 'José'},
  {id: '4', nome: 'Pedro'},
];

@Component({
  selector: 'app-listagem-atores',
  templateUrl: './listagem-atores.component.html',
  styleUrls: ['./listagem-atores.component.scss']
})

export class ListagemAtoresComponent implements OnInit {

  atores = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'nome'];

  constructor() { 

    //this.atores = [];

  }

  ngOnInit(): void {
  }

}
