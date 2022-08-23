import { Component, OnInit } from '@angular/core';
import { IncluirNovoAtorService } from '../services/incluir-novo-ator.service';


@Component({
  selector: 'app-incluir-novo-ator',
  templateUrl: './incluir-novo-ator.component.html',
  styleUrls: ['./incluir-novo-ator.component.scss']
})
export class IncluirNovoAtorComponent implements OnInit {

  servico : IncluirNovoAtorService;

  constructor(auxServico: IncluirNovoAtorService) {

    this.servico = auxServico;

   }

  ngOnInit(): void {

  }

  onIncluirNovoAtor(){

    this.servico.incluirNovoAtor();

  }


}
