import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona11 } from '../entities';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-zona11',
  templateUrl: './zona11.component.html',
  styleUrls: ['./zona11.component.css']
})
export class Zona11Component implements OnInit {
	//public Zona11: Zona11;
	@ViewChild("childForm", {static: true}) childForm;
  @Input() Zona11: Zona11;  
  @Input() tipVehicul: string;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public CommonFunctions = CommonFunctions;  
  public newPaguba:string;
  public curTooltip:string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;  

  constructor() { 
  	//this.Zona11 = new Zona11();
  }

  ngOnInit(): void {
    //this.Zona11.Pagube.push("");
    //this.Zona11.Pagube = ["111","222"];
    this.newPaguba = "";
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona11.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      this.zoneCompleted.emit(this.Zona11);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  addPaguba():void{
    if(!this.CommonFunctions.isNullOrWhiteSpaces(this.newPaguba) && this.Zona11.Pagube.indexOf(this.newPaguba) < 0){
      this.Zona11.Pagube.push(this.newPaguba);
      this.newPaguba = "";
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value && this.Zona11.Pagube.indexOf(value) < 0) {
      this.Zona11.Pagube.push(value);
    }

    // Clear the input value
    //event.chipInput!.clear();
    event.input.value = "";
    event.input.focus();
  }

  remove(p: string): void {
    const index = this.Zona11.Pagube.indexOf(p);

    if (index >= 0) {
      this.Zona11.Pagube.splice(index, 1);

      var initId = '#' + p.split(' ').join('-');
      var td = document.querySelector(initId) as HTMLElement;
      if(td)
        td.style.backgroundColor = "transparent";

    }
  }  

  getId(event){
    //console.log(event.srcElement.id);
    this.newPaguba = event.srcElement.id.split('-').join(' ').replace("1","").replace("2","");
    this.addPaguba();
    event.srcElement.style.backgroundColor = "red";
  }

  getText(event){
    this.curTooltip = event.srcElement.id.split('-').join(' ').replace("1","").replace("2","");
  }  
}
