import { Component, OnInit, Input } from '@angular/core';
import { Martor } from '../entities';
import { CommonFunctions } from '../commonfunctions';

@Component({
  selector: 'app-martor',
  templateUrl: './martor.component.html',
  styleUrls: ['./martor.component.css']
})
export class MartorComponent implements OnInit {
  @Input() martor: Martor;  
  public CommonFunctions = CommonFunctions;  

  constructor() { }

  ngOnInit(): void {
  }

}
