import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IncluirNovoAtorService } from '../services/incluir-novo-ator.service';

@Component({
  selector: 'app-alterar-ator',
  templateUrl: './alterar-ator.component.html',
  styleUrls: ['./alterar-ator.component.scss']
})
export class AlterarAtorComponent implements OnInit {


  servico : IncluirNovoAtorService;

  form : FormGroup; 

  constructor(auxServico : IncluirNovoAtorService, private route: ActivatedRoute, private formBuilder: FormBuilder, private snackBar: MatSnackBar,) {

      this.servico = auxServico;

      this.form = this.formBuilder.group({

        id:[null],
        nome:[null]
  
      });

   }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params : any) => {
        const id = params ['id'];
        console.log("---------------"+id);
        const ator$ = this.servico.obterDadosAtor(id);
        ator$.subscribe(ator => {
          this.form.patchValue({
            id:ator.id,
            nome: ator.nome
          });
        });
    });


    console.log(this.form.value);

  }

  onAlterarAtor(){

    this.servico.alterarAtor(this.form.value).subscribe(result => {this.snackBar.open("Sucesso")}, error => {this.snackBar.open("ERRO!")});

  }

}
