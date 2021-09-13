import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Zona10 } from '../entities';
import { CommonFunctions } from '../commonfunctions';

@Component({
  selector: 'app-zona10',
  templateUrl: './zona10.component.html',
  styleUrls: ['./zona10.component.css']
})
export class Zona10Component implements OnInit {
	//public Zona2: Zona2;
	public zoneImpact;
	@ViewChild("childForm", {static: true}) childForm;
  @Input() Zona10: Zona10;  
  @Input() tipVehicul: string;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  //public zonaImpact: string;
  public CommonFunctions = CommonFunctions;  


  constructor() { 
  	//this.Zona2 = new Zona2();
  	this.zoneImpact = CommonFunctions.ZoneImpact;
  }

  ngOnInit(): void {
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona10.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona10);
    }
    CommonFunctions.showDiv(step, visibility);
  }
}
