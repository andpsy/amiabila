import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions } from '../commonfunctions';

@Component({
  selector: 'app-documente-necesare',
  templateUrl: './documente-necesare.component.html',
  styleUrls: ['./documente-necesare.component.css']
})
export class DocumenteNecesareComponent implements OnInit {
  @Input() DocumenteNecesare: boolean;  
  @Output() confirmed = new EventEmitter();
  public CommonFunctions = CommonFunctions;  

  constructor() { }

  ngOnInit(): void {
  }

}
