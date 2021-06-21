import { Component, OnInit, Input, Inject, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonFunctions, Formular, Polita, Aditionale, GOOGLE_API_KEY } from './entities';
import { MongoDbService } from './mongo-db.service';
import { DOCUMENT } from '@angular/common';
//import * as _ from 'lodash';

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

	constructor(
    @Inject(DOCUMENT) private doc: any, 
    private mongoDbSrv: MongoDbService, 
    public dialog: MatDialog) {

    this.pas = 0;
    this._cale_parts = CommonFunctions._cale_parts;
  }

  ngOnInit(): void {
    this.setGTagManager();
    this.Formular = new Formular();
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

    if(this.CommonFunctions.step < 5 || this.CommonFunctions.step == 21 || this.CommonFunctions.step == 22)
      this.Formular[zona.constructor.name] = zona;
    else if(this.CommonFunctions.step >=5 && this.CommonFunctions.step <= 12)
      this.Formular.VehiculA[zona.constructor.name] = zona;
    else if(this.CommonFunctions.step >= 13 && this.CommonFunctions.step <= 20)
      this.Formular.VehiculB[zona.constructor.name] = zona;
    
    var tmp = 0;
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
    this.pas = Math.round(tmp/22 * 100); 
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

  public nextStep(){
    
    /*
    this.mongoDbSrv.getData().subscribe(data=>{
      console.warn(data);
    });
    */
    
    /*
    this.mongoDbSrv
     .upsertFormular(this.Formular)
     .subscribe(
       formular => { //this.Formular = new Formular(formular); 
         //this.Formular = Object.assign(this.Formular, formular);
         this.Formular = _.cloneDeep(formular);
         console.log(this.Formular);
         console.warn(formular);
       }
      ); 
    */
  }

  populateFormularFromPolita(event:Polita, vehicul:string){
    if(vehicul == 'A'){
      this.Formular.VehiculA.Polita = event;
      this.Formular.populateFormularFromPolita(vehicul);
    }else{
      this.Formular.VehiculB.Polita = event;
      this.Formular.populateFormularFromPolita(vehicul);
    }
  }
}

