import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Zona14 } from '../entities';
import { CommonFunctions } from '../commonfunctions';

@Component({
  selector: 'app-zona14',
  templateUrl: './zona14.component.html',
  styleUrls: ['./zona14.component.css']
})
export class Zona14Component implements OnInit {
	//public Zona14: Zona14;
	@ViewChild("childForm", {static: true}) childForm;
  @Input() Zona14: Zona14;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public CommonFunctions = CommonFunctions;  

  constructor() { 
  	//this.Zona14 = new Zona14();
  }

  ngOnInit(): void {
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona14.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona14);
    }
    CommonFunctions.showDiv(step, visibility);
  }
}
