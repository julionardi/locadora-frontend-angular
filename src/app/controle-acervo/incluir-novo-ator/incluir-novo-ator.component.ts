import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IncluirNovoAtorService } from '../services/incluir-novo-ator.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-incluir-novo-ator',
  templateUrl: './incluir-novo-ator.component.html',
  styleUrls: ['./incluir-novo-ator.component.scss']
})
export class IncluirNovoAtorComponent implements OnInit {

  servico : IncluirNovoAtorService;

  form : FormGroup;

  constructor(auxServico: IncluirNovoAtorService, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) {

    this.servico = auxServico;

    this.form = this.formBuilder.group({

      nome:[null]

    });

   }

  ngOnInit(): void {

  }

  onSubmit(){

    //console.log("Incluir Novo Ator : onSubmit");
    console.log(this.form.value);



    this.servico.incluirNovoAtor(this.form.value).subscribe(result => {this.snackBar.open("Sucesso")}, error => {this.snackBar.open("ERRO!")});

  }

  onListarAtores(){

    this.router.navigate(['controle-acervo/listagem-atores']);

  }

}
