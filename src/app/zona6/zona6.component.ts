import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona6, TariCarteVerde, TaraCarteVerde } from '../entities';

@Component({
  selector: 'app-zona6',
  templateUrl: './zona6.component.html',
  styleUrls: ['./zona6.component.css']
})
export class Zona6Component implements OnInit {
	//public Zona6: Zona6;
	@ViewChild("childForm", {static: true}) childForm;
  @ViewChild("Tara", {static: true}) Tara;
  @Input() Zona6: Zona6;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public Tari: TariCarteVerde;
  public TariTemp: TariCarteVerde;  
  public CommonFunctions = CommonFunctions;  

  constructor() { 
  	//this.Zona6 = new Zona6();
    this.Tari = new TariCarteVerde();
    this.TariTemp = new TariCarteVerde();
  }

  ngOnInit(): void {
    this.Tara.control.value = this.Zona6.Tara = "ROMANIA";
  } 


  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona6.StepCompleted = true;
      this.zoneCompleted.emit(true);
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
  
}
