import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.css']
})
export class GDPRComponent implements OnInit {
  @Input() GDPR: boolean;  
  @Output() confirmed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
