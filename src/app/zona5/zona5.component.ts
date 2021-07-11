import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona5, Martor } from '../entities';

@Component({
  selector: 'app-zona5',
  templateUrl: './zona5.component.html',
  styleUrls: ['./zona5.component.css']
})
export class Zona5Component implements OnInit {
	//public Zona5: Zona5;
	@ViewChild("childForm", {static: true}) childForm;
  @Input() Zona5: Zona5;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public CommonFunctions = CommonFunctions;  

  constructor() { 
  	//this.Zona5 = new Zona5();
  }

  ngOnInit(): void {
  }


  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona5.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona5);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  existaMartori(){
    if(this.Zona5.ExistaMartori){
      var m = new Martor();
      this.Zona5.Martori.push(m);
    }else{
      this.Zona5.Martori = [];
    }
  }

  AddMartor(): void{
    if(this.Zona5.Martori[this.Zona5.Martori.length-1].hasError()) return;
  	var newMartor = new Martor();
  	this.Zona5.Martori.push(newMartor);
  }
  RemoveMartor(martor:Martor): void{
  	var index = this.Zona5.Martori.indexOf(martor);
  	if(index > -1)
  		this.Zona5.Martori.splice(index, 1);
  }

}
