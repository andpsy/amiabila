import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Aditionale } from '../entities';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.css']
})
export class PrerequisitesComponent implements OnInit {
  @Input() a: Aditionale;  
  @Output() confirmed = new EventEmitter();
  public CommonFunctions = CommonFunctions;  

  constructor() { }

  ngOnInit(): void {
  }

}
