import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-conditii',
  templateUrl: './conditii.component.html',
  styleUrls: ['./conditii.component.css']
})
export class ConditiiComponent implements OnInit {
  @Input() Conditii: boolean;  
  //public Conditii: boolean;
  @Output() confirmed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
