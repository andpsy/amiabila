import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formular } from './entities';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CommonFunctions } from './commonfunctions';

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

  getFormular(id:string):Observable<Formular>{
    let url = this.CommonFunctions.SRV_URL + 'MongoDb/' + id;
    return this.http.get<Formular>(url, this.httpOptions);
  }

  upsertFormular(formular: Formular): Observable<Formular>{
    var url = this.CommonFunctions.SRV_URL + 'MongoDb/Upsert';
    //console.warn(formular);
    return this.http.post<Formular>(url, formular, this.httpOptions).pipe(
      //tap((updatedFormular: Formular) => { console.log(updatedFormular) }),
      catchError(this.handleError('addData', formular)));
  }

  genericPost(url: string, params: any):Observable<any>{
    return this.http.post<any>(url, params, this.httpOptions).pipe(
      catchError(this.handleError('genericPostMethod', params)));
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
