import { Component, OnInit, Input } from '@angular/core';
import { CommonFunctions, PagubaAuto } from '../entities';

@Component({
  selector: 'app-paguba-auto',
  templateUrl: './paguba-auto.component.html',
  styleUrls: ['./paguba-auto.component.css']
})
export class PagubaAutoComponent implements OnInit {
  @Input() PagubaAuto: PagubaAuto;  
  public CommonFunctions = CommonFunctions;  

  constructor() { }

  ngOnInit(): void {
  }

}
