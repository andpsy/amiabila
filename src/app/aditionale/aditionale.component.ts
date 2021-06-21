import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona12, Aditionale, Zona8 } from '../entities'; // SocietatiAsigurare

@Component({
  selector: 'app-aditionale',
  templateUrl: './aditionale.component.html',
  styleUrls: ['./aditionale.component.css']
})
export class AditionaleComponent implements OnInit {
  @Input() Zona12: Zona12;  
  @Input() Aditionale: Aditionale;  
  @Input() Zona8A: Zona8;  
  @Input() Zona8B: Zona8;  
	@ViewChild("childForm", {static: true}) childForm;
  //public SocietatiCasco: SocietatiAsigurare;
  //public SocietatiCascoTemp: SocietatiAsigurare;  

  constructor() {
  	//this.Zona1 = new Zona1();
    //this.SocietatiCasco = new SocietatiAsigurare();
    //this.SocietatiCascoTemp = new SocietatiAsigurare();
  }

  ngOnInit(): void {
  }

  /*
  filterSocietati(event):void{
      if(!event){
          this.SocietatiCasco.Societati = this.SocietatiCascoTemp.Societati;
      } // when nothing has typed
      if (typeof event === 'string') {
          console.log(event);
          this.SocietatiCasco.Societati = this.SocietatiCascoTemp.Societati.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
      }
   }       
   */

   pagubitDecontareDirecta(){
     switch(this.Zona12.VinovatSelectat){
      case 'A':
        return this.Zona8B.DecontareDirecta;
      case 'B':
        return this.Zona8A.DecontareDirecta;
      default:
        return false;
     }
   }
   vinovatCasco(){
     switch(this.Zona12.VinovatSelectat){
      case 'A':
        return this.Zona8A.Casco;
      case 'B':
        return this.Zona8B.Casco;
      case 'AB':
        return this.Zona8A.Casco || this.Zona8B.Casco;
      default:
        return false;
     }
   }   
}
