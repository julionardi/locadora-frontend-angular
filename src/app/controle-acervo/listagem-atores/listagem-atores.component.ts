import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncluirNovoAtorService } from '../services/incluir-novo-ator.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Ator } from '../model/ator';

const ELEMENT_DATA: Ator[] = [
  {id: 1, nome: 'João'},
  {id: 2, nome: 'Maria'},
  {id: 3, nome: 'José'},
  {id: 4, nome: 'Pedro'},
];

@Component({
  selector: 'app-listagem-atores',
  templateUrl: './listagem-atores.component.html',
  styleUrls: ['./listagem-atores.component.scss']
})

export class ListagemAtoresComponent implements OnInit {

  atores = ELEMENT_DATA;

  //atores : Ator[];

  servico : IncluirNovoAtorService;
  
  displayedColumns: string[] = ['id', 'nome', 'acoes'];

  
  snackBar : MatSnackBar;
    

  constructor(private router: Router, auxServico : IncluirNovoAtorService, private auxSnackBar: MatSnackBar,) { 
    
    this.servico = auxServico; 

    this.snackBar = auxSnackBar;
    
  }

  ngOnInit(): void {

    this.onObterListaAtores();

  }

  onObterListaAtores(){

      this.servico.obterListaAtores().subscribe(data => {

        this.atores = data;
        console.log(this.atores)

      });


  }

  onIncluirNovoAtor(){

      console.log("Realizado: onIncluirNovoAtor");

      this.router.navigate(['controle-acervo/incluir-novo-ator']);

  }

  onAlterarAtor(idCurso:number){

    console.log("Realizado: onAlterarAtor");

    this.router.navigate(['controle-acervo/alterar-ator', idCurso]);


  }

  onExcluirAtor(idCurso:number){

    console.log("Realizado: onExcluirNovoAtor" + idCurso);

    //this.router.navigate(['controle-acervo/incluir-novo-ator']);

    //this.servico.excluirAtor(idCurso).subscribe(result => {this.snackBar.open("Sucesso")}, error => {this.snackBar.open("ERRO!")});

    this.servico.excluirAtor(idCurso).subscribe(result => {this.snackBar.open("SUCESSO!")}, error => {this.snackBar.open("ERRO!")});

  }

}
