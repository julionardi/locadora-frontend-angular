import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { tap } from 'rxjs';
import { Ator } from '../model/ator';

@Injectable({
  providedIn: 'root'
})
export class ListagemAtoresService {

  private readonly API = '';

  constructor(private httpClient: HttpClient) { }

  //listarAtores(){
    
    //return this.httpClient.get<Ator[]>(this.API).pipe(first(), tap(courses => console.log(courses)));

    

  //}

}
