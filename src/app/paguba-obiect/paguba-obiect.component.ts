import { Component, OnInit, Input } from '@angular/core';
import { PagubaObiect } from '../entities';
import { CommonFunctions } from '../commonfunctions';

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
