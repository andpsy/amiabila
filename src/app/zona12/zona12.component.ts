import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona12, Aditionale } from '../entities';

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
      this.zoneCompleted.emit(true);
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
