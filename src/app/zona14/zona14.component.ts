import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona14 } from '../entities';

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

  constructor() { 
  	//this.Zona14 = new Zona14();
  }

  ngOnInit(): void {
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona14.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      this.zoneCompleted.emit(this.Zona14);
    }
    CommonFunctions.showDiv(step, visibility);
  }
}
