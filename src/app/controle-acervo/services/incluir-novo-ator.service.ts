import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ListagemAtoresComponent } from '../listagem-atores/listagem-atores.component';
import { first, Observable, throwError } from 'rxjs';
import { tap, retry, catchError } from 'rxjs';
import { Ator } from '../model/ator';

@Injectable({
  providedIn: 'root'
})
export class IncluirNovoAtorService {

  private readonly API = '/locadora/resouces/atores';

  constructor(private httpClient: HttpClient) { }

  incluirNovoAtor(ator : Ator):Observable<Ator>{

    //this.router.navigate(['controle-acervo/alterar-ator']);

    console.log("Realizado: Incluir Novo Ator - Service");

    return this.httpClient.post<Ator>(this.API, ator).pipe(retry(3), catchError(this.handleError));

  }

  obterListaAtores():Observable<Ator[]>{

    //const ELEMENT_DATA: Ator[] = [
     // {id: 1, nome: 'João'},
     // {id: 2, nome: 'Maria'},
     // {id: 3, nome: 'José'},
    //  {id: 4, nome: 'Pedro'},
   // ];

    //return ELEMENT_DATA;

    //return this.httpClient.get<Ator[]>(this.API).pipe(first(), tap(courses => console.log(courses)));

    return this.httpClient.get<Ator[]>(this.API).pipe(retry(3), catchError(this.handleError));

  }

  excluirAtor(idCurso:number){
    
    console.log("Realizado: Excluir Ator - Service");

    return this.httpClient.delete(this.API+'/'+idCurso).pipe(retry(3), catchError(this.handleError));

  }

  alterarAtor(ator : Ator):Observable<Ator>{

    return this.httpClient.put<Ator>(this.API+'/'+ator.id, ator).pipe(retry(3), catchError(this.handleError));

  }

  obterDadosAtor(idCurso:number){

    console.log("**************"+idCurso);

    return this.httpClient.get<Ator>(this.API+'/'+idCurso).pipe(retry(3), catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


}
