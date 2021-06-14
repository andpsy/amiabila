import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonFunctions, Formular } from './entities';
import { MongoDbService } from './mongo-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'amiabila';
  public pas:number;
  public Formular:Formular;
  public _cale_parts: string;
  public CommonFunctions = CommonFunctions;  

	constructor(private mongoDbSrv:MongoDbService, public dialog: MatDialog) {
    this.pas = 0;
    this.Formular = new Formular();
    this._cale_parts = CommonFunctions._cale_parts;
    /*
    this.mongoDbSrv.getData().subscribe(data=>{
      console.warn(data);
    });
    */
  }

  ngOnInit(): void {
  }

  showDiv(step: number, visibility:boolean):void{
    if(this.Formular.getPreviousZoneCompletedStatus(step))
      CommonFunctions.showDiv(step, visibility);
  }  
  getDivId(step:number):string{
    return CommonFunctions.Steps[step].DivId;
  }

  refreshProgressBar(zoneCompleted:boolean):void{
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
}
