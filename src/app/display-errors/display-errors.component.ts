import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions } from '../entities';

@Component({
  selector: 'app-display-errors',
  templateUrl: './display-errors.component.html',
  styleUrls: ['./display-errors.component.css']
})
export class DisplayErrorsComponent implements OnInit {
  @Input() errors: string[];  
  public CommonFunctions = CommonFunctions;  

  constructor() {
  }

  ngOnInit(): void {
  }
}
