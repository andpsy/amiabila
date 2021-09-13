import { Component, OnInit, OnDestroy, Input, Output, Inject, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() Id: string;
  @Input() Email: string;
  @Input() Telefon: string;
  public COD:string;

  constructor() { }

  ngOnInit(): void {
  }

}
