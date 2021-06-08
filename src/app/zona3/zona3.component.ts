import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonFunctions, Zona3 } from '../entities';
import {VatamariComponent} from '../vatamari/vatamari.component';

@Component({
  selector: 'app-zona3',
  templateUrl: './zona3.component.html',
  styleUrls: ['./zona3.component.css']
})
export class Zona3Component implements OnInit {
	//public Zona3: Zona3;
	@ViewChild("childForm", {static: true}) childForm;
  @Input() Zona3: Zona3;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public CommonFunctions = CommonFunctions;  

  constructor(public dialog: MatDialog) {
  	//this.Zona3 = new Zona3();
  }

  ngOnInit(): void {
  }

  chkBoxChange(){
    if(this.Zona3.VatamariDa){
      this.open112Dialog();
    }
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona3.StepCompleted = true;
      this.zoneCompleted.emit(true);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  open112Dialog(){
    const dialogRef = this.dialog.open(VatamariComponent, {
      /*
      maxWidth: '95vw !important',
      minWidth: '95vw !important',
      width: '95vw !important',
      */
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.Zona3.Confirma112 = result;
      console.log('The dialog was closed');
    });    
  }
}
