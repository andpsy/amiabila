import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona1 } from '../entities';

@Component({
  selector: 'app-zona1',
  templateUrl: './zona1.component.html',
  styleUrls: ['./zona1.component.css']
})
export class Zona1Component implements OnInit {
  @Input() Zona1: Zona1;  
  @Input() step: number;  
  @Output() zoneCompleted = new EventEmitter();
	//public Zona1: Zona1;
	@ViewChild("childForm", {static: true}) childForm;
  public CommonFunctions = CommonFunctions;  

  constructor() {
  	//this.Zona1 = new Zona1();
  }

  ngOnInit(): void {
    if(this.Zona1.Data == null && this.Zona1.Ora == null){
      this.Zona1.Data = new Date();
      this.Zona1.Ora = CommonFunctions.addZero(this.Zona1.Data.getHours()) + ":" + CommonFunctions.addZero(this.Zona1.Data.getMinutes());
    }
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid && this.Zona1.hasError() == null){
      this.Zona1.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      this.zoneCompleted.emit(this.Zona1);
    }
    CommonFunctions.showDiv(step, visibility);
  }
}
