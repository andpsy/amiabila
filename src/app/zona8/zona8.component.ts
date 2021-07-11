import { Component, OnInit, ElementRef, AfterViewInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona8, TariCarteVerde, SocietatiAsigurare } from '../entities';

@Component({
  selector: 'app-zona8',
  templateUrl: './zona8.component.html',
  styleUrls: ['./zona8.component.css']
})
export class Zona8Component implements OnInit {
	//public Zona8: Zona8;
	@ViewChild("childForm", {static: true}) childForm;
  @ViewChild("Tara", {static: true}) Tara;
  @ViewChild("Denumire", {static: true}) Denumire;
  @Input() Zona8: Zona8;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public Tari: TariCarteVerde;
  public TariTemp: TariCarteVerde;  
  public SocietatiRCA: SocietatiAsigurare;
  public SocietatiRCATemp: SocietatiAsigurare;  
  public SocietatiCASCO: SocietatiAsigurare;
  public SocietatiCASCOTemp: SocietatiAsigurare;  
  public CommonFunctions = CommonFunctions;  

  constructor() { 
  	//this.Zona8 = new Zona8();
    this.Tari = new TariCarteVerde();
    this.TariTemp = new TariCarteVerde();
    this.SocietatiRCA = new SocietatiAsigurare();
    this.SocietatiRCATemp = new SocietatiAsigurare();
    this.SocietatiCASCO = new SocietatiAsigurare();
    this.SocietatiCASCOTemp = new SocietatiAsigurare();
  }

  ngOnInit(): void {
    this.Tara.control.value = this.Zona8.Tara = "ROMANIA";
    this.SocietatiRCA.Societati = this.SocietatiRCA.Societati.filter(a => a.RCA == true);
    this.SocietatiRCATemp.Societati = this.SocietatiRCATemp.Societati.filter(a => a.RCA == true);
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona8.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona8);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  filterItem(event):void{
      if(!event){
          this.Tari.Tari = this.TariTemp.Tari;
      } // when nothing has typed*/   
      if (typeof event === 'string') {
          this.Tari.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
      }
   }    

  filterSocietati(event):void{
      if(!event){
          this.SocietatiRCA.Societati = this.SocietatiRCATemp.Societati;
      } // when nothing has typed*/   
      if (typeof event === 'string') {
          this.SocietatiRCA.Societati = this.SocietatiRCATemp.Societati.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
      }
   }     
  filterSocietatiCasco(event):void{
      if(!event){
          this.SocietatiCASCO.Societati = this.SocietatiCASCOTemp.Societati;
      } // when nothing has typed*/   
      if (typeof event === 'string') {
          this.SocietatiCASCO.Societati = this.SocietatiCASCOTemp.Societati.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
      }
   }     
  
}
