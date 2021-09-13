import { Component, OnInit, ElementRef, AfterViewInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Zona9, Zona6, TariCarteVerde, TaraCarteVerde } from '../entities';
import { CommonFunctions } from '../commonfunctions';

@Component({
  selector: 'app-zona9',
  templateUrl: './zona9.component.html',
  styleUrls: ['./zona9.component.css']
})
export class Zona9Component implements OnInit {
	//public Zona9: Zona9;
	@ViewChild("childForm", {static: true}) childForm;
  @ViewChild("Tara", {static: true}) Tara;
  @Input() Zona9: Zona9;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  @Input() Zona6: Zona6;  
  public Tari: TariCarteVerde;
  public TariTemp: TariCarteVerde;  
  public CommonFunctions = CommonFunctions;  

  constructor() { 
  	//this.Zona9 = new Zona9();
    this.Tari = new TariCarteVerde();
    this.TariTemp = new TariCarteVerde();
  }

  ngOnInit(): void {
    this.Tara.control.value = this.Zona9.Tara = "ROMANIA";
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona9.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona9);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  filterItem(event):void{
      if(!event){
          this.Tari.Tari = this.TariTemp.Tari;
      } // when nothing has typed*/   
      if (typeof event === 'string') {
          console.log(event);
          this.Tari.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
      }
   }    

  preiaInfoAsigurat(){
    if(this.Zona9.IdenticCuAsiguratul){
      this.Zona9.Nume = this.Zona6.Nume;
      this.Zona9.Prenume = this.Zona6.Prenume;
      this.Zona9.Adresa = this.Zona6.Adresa;
      this.Zona9.Tara = this.Zona6.Tara;
      this.Zona9.Telefon = this.Zona6.Telefon;
      this.Zona9.Email = this.Zona6.Email;
    }
    else{
      this.Zona9 = new Zona9();
    }
  }
}
