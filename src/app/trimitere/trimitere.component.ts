import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { CommonFunctions, Formular, USE_FORM } from '../entities';

@Component({
  selector: 'app-trimitere',
  templateUrl: './trimitere.component.html',
  styleUrls: ['./trimitere.component.css']
})
export class TrimitereComponent implements OnInit {
  @ViewChild("childForm", {static: true}) childForm;
  @Input() Formular: Formular; 
  @Input() step: number;  

  public CommonFunctions = CommonFunctions;  
  public use_form = USE_FORM;
  public zonashow = null;
  public icon = null;

  constructor() { }

  ngOnInit(): void {
    this.zonashow = this.step == 25 ? true : false;
    this.icon = this.step == 25 ? 'expand_less' : 'expand_more';
  } 

  ngAfterViewInit(): void {
  }  

  changeZona(){
    this.zonashow = !this.zonashow;
    this.icon = !this.zonashow ? 'expand_more' : 'expand_less'
    this.ngAfterViewInit();
  } 

}
