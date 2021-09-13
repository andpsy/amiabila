import { Component, OnInit, Input, Inject, Output, ViewChild, EventEmitter, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { Router } from '@angular/router';
import {  Router, RoutesRecognized } from '@angular/router';
import { Formular, Polita, Aditionale } from './entities';
import { CommonFunctions, GOOGLE_API_KEY, USE_FORM } from './commonfunctions';
import { MongoDbService } from './mongo-db.service';
import { DOCUMENT } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'amiabila';
  public pas:number;
  public Formular:Formular;
  public a: Aditionale = new Aditionale();
  public _cale_parts: string;
  public CommonFunctions = CommonFunctions;  
  public externalGuid:string;
  public externalLetter:string;
  public use_form = USE_FORM;
  public sendCompleted = false;

	constructor(
    private router: Router,
    @Inject(DOCUMENT) private doc: any, 
    private mongoDbSrv: MongoDbService, 
    public dialog: MatDialog) {
      this.pas = 0;
      this._cale_parts = CommonFunctions._cale_parts;
    }

  ngOnInit(): void {
    this.Formular = new Formular();
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        if (val.state.root.firstChild){
          if(val.state.root.firstChild.params.id)
            this.externalGuid = val.state.root.firstChild.params.id;
          if(val.state.root.firstChild.params.litera)
            this.externalLetter = val.state.root.firstChild.params.litera;
          this.getFormular();
        }          
      }
    });    
    this.setGTagManager();
  }

  showDiv(step: number, visibility:boolean):void{
    if(this.Formular.getPreviousZoneCompletedStatus(step)){
      //this.CommonFunctions.step = step;
      //this.CommonFunctions.step = visibility ? step : null;
      CommonFunctions.showDiv(step, visibility);
    }    
  }  

  getDivId(step:number):string{
    return CommonFunctions.Steps[step].DivId;
  }

  //refreshProgressBar(zoneCompleted:boolean):void{
  refreshProgressBar(zona:any):void{    
    var tmp = 0;
    for(var i=0;i<CommonFunctions.Steps.length;i++){
      if(CommonFunctions.Steps[i].Step == CommonFunctions.step && CommonFunctions.Steps[i].zona == zona.constructor.name){
        if(CommonFunctions.Steps[i].vehicul != null){
          this.Formular["Vehicul"+CommonFunctions.Steps[i].vehicul][zona.constructor.name] = zona;
          tmp += this.Formular["Vehicul"+CommonFunctions.Steps[i].vehicul][zona.constructor.name].StepCompleted ? 1 : 0;
        }
        else{
          this.Formular[zona.constructor.name] = zona;
          tmp += this.Formular[zona.constructor.name].StepCompleted ? 1 : 0;
        }
        break;
      }
    }
    this.nextStep(zona.constructor.name);
    /*
    if(this.CommonFunctions.step < 5 || this.CommonFunctions.step == 21 || this.CommonFunctions.step == 22)
      this.Formular[zona.constructor.name] = zona;
    else if(this.CommonFunctions.step >=5 && this.CommonFunctions.step <= 12)
      this.Formular.VehiculA[zona.constructor.name] = zona;
    else if(this.CommonFunctions.step >= 13 && this.CommonFunctions.step <= 20)
      this.Formular.VehiculB[zona.constructor.name] = zona;
    
    tmp += this.Formular.Zona1.StepCompleted ? 1 : 0;
    tmp += this.Formular.Zona2.StepCompleted ? 1 : 0;  
    tmp += this.Formular.Zona3.StepCompleted ? 1 : 0;  
    tmp += this.Formular.Zona4.StepCompleted ? 1 : 0;  
    tmp += this.Formular.Zona5.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculA.Zona6.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculA.Zona7.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculA.Zona8.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculA.Zona9.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculA.Zona10.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculA.Zona11.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculA.Zona14.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculA.Zona15.StepCompleted ? 1 : 0;  

    tmp += this.Formular.VehiculB.Zona6.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculB.Zona7.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculB.Zona8.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculB.Zona9.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculB.Zona10.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculB.Zona11.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculB.Zona14.StepCompleted ? 1 : 0;  
    tmp += this.Formular.VehiculB.Zona15.StepCompleted ? 1 : 0;  

    tmp += this.Formular.Zona12.StepCompleted ? 1 : 0;  
    tmp += this.Formular.Zona13.StepCompleted ? 1 : 0;  
    */
    this.pas = Math.round(tmp/CommonFunctions.Steps.length * 100); 
  }  

  private setGTagManager() {
    const s = this.doc.createElement('script');
    s.type = 'text/javascript';
    s.src = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_API_KEY + "&libraries=places";
    s.setAttribute('async', "true");
    s.setAttribute('defer', "true");
    const head = this.doc.getElementsByTagName('head')[0];
    head.appendChild(s);
  }  

  public nextStep(zonaName:string){
    
    /*
    this.mongoDbSrv.getData().subscribe(data=>{
      console.warn(data);
    });
    */

    this.mongoDbSrv
     .upsertFormular(this.Formular)
     .subscribe(
       formular => { 
         //console.log(formular);
         //this.Formular = this.CommonFunctions.copyObj(formular, this.Formular); // nu merge uploadul
         
         if(formular.Id != null && this.Formular.Id == null)
           this.Formular.Id = formular.Id;
         
       }
      ); 
  }

  getFormular(){
    this.mongoDbSrv
     .getFormular(this.externalGuid)
     .subscribe(
       formular => { 
         //this.Formular = this.CommonFunctions.copyObj(formular, this.Formular);
         //this.Formular = this.CommonFunctions.copyObjI(formular, this.Formular);
         //this.Formular = this.CommonFunctions.copyObj(formular);
         this.Formular = new Formular(formular);
       }
      );    
  }

  populateFormularFromPolita(event:Polita, vehicul:string){
    if(vehicul == 'A'){
      this.Formular.VehiculA.Polita = event;
      this.Formular.populateFormularFromPolita(vehicul);
    }else{
      this.Formular.VehiculB.Polita = event;
      this.Formular.populateFormularFromPolita(vehicul);
    }
    if(!this.use_form){
      this.nextStep(null);
    }
  }

  filesUploaded(event){
    //console.log(event);
    //console.warn(this.Formular);
    //this.Formular.Fisiere = event;
    this.nextStep(null);
  }

  updateSendStatus(event){
    this.sendCompleted = event[0];
  }
}

