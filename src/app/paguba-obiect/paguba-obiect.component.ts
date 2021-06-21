import { Component, OnInit, Input } from '@angular/core';
import { CommonFunctions, PagubaObiect } from '../entities';

@Component({
  selector: 'app-paguba-obiect',
  templateUrl: './paguba-obiect.component.html',
  styleUrls: ['./paguba-obiect.component.css']
})
export class PagubaObiectComponent implements OnInit {
  @Input() PagubaObiect: PagubaObiect;  
  public CommonFunctions = CommonFunctions;  

  constructor() { }

  ngOnInit(): void {
  }

}
