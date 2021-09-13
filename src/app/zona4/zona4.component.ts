import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Zona4, Pagube, PagubaAuto, PagubaObiect } from '../entities';
import { CommonFunctions } from '../commonfunctions';

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
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona4);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  existaPagubeAuto(event){
    if(event){
      var pa = new PagubaAuto();
      this.Zona4.Pagube.PagubeAuto.push(pa);
    }else{
      this.Zona4.Pagube.PagubeAuto = [];
    }
  }
  AddPagubaAuto(): void{
    if(this.Zona4.Pagube.PagubeAuto[this.Zona4.Pagube.PagubeAuto.length-1].hasError()) return;

    var newPA = new PagubaAuto();
    this.Zona4.Pagube.PagubeAuto.push(newPA);
  }
  RemovePagubaAuto(pa:PagubaAuto): void{
    var index = this.Zona4.Pagube.PagubeAuto.indexOf(pa);
    if(index > -1)
      this.Zona4.Pagube.PagubeAuto.splice(index, 1);
  }

  existaPagubeObiecte(event){
    if(event){
      var po = new PagubaObiect();
      this.Zona4.Pagube.PagubeObiecte.push(po);
    }else{
      this.Zona4.Pagube.PagubeObiecte = [];
    }
  }
  AddPagubaObiect(): void{
    if(this.Zona4.Pagube.PagubeObiecte[this.Zona4.Pagube.PagubeObiecte.length-1].hasError()) return;
    
    var newPO = new PagubaObiect();
    this.Zona4.Pagube.PagubeObiecte.push(newPO);
  }
  RemovePagubaObiect(po:PagubaObiect): void{
    var index = this.Zona4.Pagube.PagubeObiecte.indexOf(po);
    if(index > -1)
      this.Zona4.Pagube.PagubeObiecte.splice(index, 1);
  }

}
