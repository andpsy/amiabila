import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona12, Aditionale, SocietatiAsigurare } from '../entities';

@Component({
  selector: 'app-aditionale',
  templateUrl: './aditionale.component.html',
  styleUrls: ['./aditionale.component.css']
})
export class AditionaleComponent implements OnInit {
  @Input() Zona12: Zona12;  
  @Input() Aditionale: Aditionale;  
	@ViewChild("childForm", {static: true}) childForm;
  public SocietatiCasco: SocietatiAsigurare;
  public SocietatiCascoTemp: SocietatiAsigurare;  

  constructor() {
  	//this.Zona1 = new Zona1();
    this.SocietatiCasco = new SocietatiAsigurare();
    this.SocietatiCascoTemp = new SocietatiAsigurare();
  }

  ngOnInit(): void {
  }

  filterSocietati(event):void{
      if(!event){
          this.SocietatiCasco.Societati = this.SocietatiCascoTemp.Societati;
      } // when nothing has typed*/   
      if (typeof event === 'string') {
          console.log(event);
          this.SocietatiCasco.Societati = this.SocietatiCascoTemp.Societati.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
      }
   }       

}
