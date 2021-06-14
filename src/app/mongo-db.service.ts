import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonFunctions, Formular } from './entities';

@Injectable({
  providedIn: 'root'
})
export class MongoDbService {
  public CommonFunctions = CommonFunctions;   

  constructor(private http:HttpClient) { }

  getData(){
    let url = this.CommonFunctions.SRV_URL + 'MongoDb';
    return this.http.get(url);
  }
}
