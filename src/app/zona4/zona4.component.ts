import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona4 } from '../entities';

@Component({
  selector: 'app-zona4',
  templateUrl: './zona4.component.html',
  styleUrls: ['./zona4.component.css']
})
export class Zona4Component implements OnInit {
	//public Zona4: Zona4;
	@ViewChild("childForm", {static: true}) childForm;
  @Input() Zona4: Zona4;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public CommonFunctions = CommonFunctions;  

  constructor() {
  	//this.Zona4 = new Zona4();
  }

  ngOnInit(): void {
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona4.StepCompleted = true;
      this.zoneCompleted.emit(true);
    }
    CommonFunctions.showDiv(step, visibility);
  }

}
