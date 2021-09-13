import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Zona12, Aditionale, Zona8 } from '../entities';
import { CommonFunctions } from '../commonfunctions';

@Component({
  selector: 'app-zona12',
  templateUrl: './zona12.component.html',
  styleUrls: ['./zona12.component.css']
})
export class Zona12Component implements OnInit {
	//public Zona12: Zona12;
	@ViewChild("childForm", {static: true}) childForm;
  @Input() Zona12: Zona12;  
  @Input() Aditionale: Aditionale;  
  @Input() Zona8A: Zona8;  
  @Input() Zona8B: Zona8;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public CommonFunctions = CommonFunctions;  

  constructor() {
  	//this.Zona12 = new Zona12();
  }

  ngOnInit(): void {
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona12.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona12);
    }
    CommonFunctions.showDiv(step, visibility);
  }
  
  refreshCasute():void{
    this.Zona12.CasuteA = this.Zona12.CasuteB = 0;
  	for(var i=0;i<this.Zona12.Imprejurari.Imprejurari.length;i++){
			this.Zona12.CasuteA += this.Zona12.Imprejurari.Imprejurari[i].VehiculA ? 1 : 0;
			this.Zona12.CasuteB += this.Zona12.Imprejurari.Imprejurari[i].VehiculB ? 1 : 0;
  	}
  }
}
