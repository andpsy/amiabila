import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-termeni-si-conditii',
  templateUrl: './termeni-si-conditii.component.html',
  styleUrls: ['./termeni-si-conditii.component.css']
})
export class TermeniSiConditiiComponent implements OnInit {
  @Input() TermeniSiConditii: boolean;  
  @Output() confirmed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
