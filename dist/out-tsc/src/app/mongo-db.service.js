import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CommonFunctions } from './entities';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
let MongoDbService = class MongoDbService {
    constructor(http) {
        this.http = http;
        this.CommonFunctions = CommonFunctions;
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' })
        };
    }
    getData() {
        let url = this.CommonFunctions.SRV_URL + 'MongoDb';
        return this.http.get(url);
    }
    getFormular(id) {
        let url = this.CommonFunctions.SRV_URL + 'MongoDb/' + id;
        return this.http.get(url, this.httpOptions);
    }
    upsertFormular(formular) {
        var url = this.CommonFunctions.SRV_URL + 'MongoDb/Upsert';
        //console.warn(formular);
        return this.http.post(url, formular, this.httpOptions).pipe(
        //tap((updatedFormular: Formular) => { console.log(updatedFormular) }),
        catchError(this.handleError('addData', formular)));
    }
    genericPost(url, params) {
        return this.http.post(url, params, this.httpOptions).pipe(catchError(this.handleError('genericPostMethod', params)));
    }
    /*
      upsertFormular(formular: Formular): Formular{
        return formular;
      }
    */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
MongoDbService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MongoDbService);
export { MongoDbService };
//# sourceMappingURL=mongo-db.service.js.map