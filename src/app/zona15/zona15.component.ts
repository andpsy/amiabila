import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { CommonFunctions, Zona15 } from '../entities';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-zona15',
  templateUrl: './zona15.component.html',
  styleUrls: ['./zona15.component.css']
})
export class Zona15Component implements OnInit {
	//public Zona2: Zona2;
	@ViewChild("childForm", {static: true}) childForm;
	@ViewChild('signatureContainer', {static: true}) signatureContainer;	
	@ViewChild('signaturePad', {static: true}) signaturePad;	
  @Input() Zona15: Zona15;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public CommonFunctions = CommonFunctions;  

  constructor() { 
  	//this.Zona15 = new Zona15();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
  	this.resizeSignaturePad(null);
  }  

  resizeSignaturePad(event){
  	//this.signaturePad.set('canvasWidth', this.signatureContainer.nativeElement.clientWidth);
  	this.signaturePad.queryPad()._canvas.width = this.signatureContainer.nativeElement.clientWidth;  	
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona15.StepCompleted = true;
      this.zoneCompleted.emit(true);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  clearCanvas():void{
  	this.signaturePad.clear();
  }
}
