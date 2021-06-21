import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonFunctions, Formular } from './entities';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MongoDbService {
  public CommonFunctions = CommonFunctions;   
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' })
  };
  constructor(private http:HttpClient) { }

  getData(){
    let url = this.CommonFunctions.SRV_URL + 'MongoDb';
    return this.http.get(url);
  }

  upsertFormular(formular: Formular): Observable<Formular>{
    var url = this.CommonFunctions.SRV_URL + 'MongoDb/Upsert';
    console.warn(formular);
    return this.http.post<Formular>(url, formular, this.httpOptions).pipe(
      //tap((updatedFormular: Formular) => { console.log(updatedFormular) }),
      catchError(this.handleError('addData', formular)));
  }

/*
  upsertFormular(formular: Formular): Formular{
    return formular;
  }
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  
}
