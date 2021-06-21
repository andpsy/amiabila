import { Component, OnInit, ElementRef, AfterViewInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonFunctions, Zona7, Motor, Remorca, MarciAuto, MarcaAuto, TariCarteVerde } from '../entities';

@Component({
  selector: 'app-zona7',
  templateUrl: './zona7.component.html',
  styleUrls: ['./zona7.component.css']
})
export class Zona7Component implements OnInit {
	//public Zona7: Zona7;
	public MarciAuto: MarciAuto;
	public MarciAutoTemp: MarciAuto;
	//public filterText: string;
	@ViewChild("childForm", {static: true}) childForm;
  @ViewChild("MotorTaraInmatriculare", {static: true}) MotorTaraInmatriculare;
  @ViewChild("RemorcaTaraInmatriculare", {static: true}) RemorcaTaraInmatriculare;

  @Input() Zona7: Zona7;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public TipVehicul: string[];
  public TariMotor: TariCarteVerde;
  public TariRemorca: TariCarteVerde;
  public TariTemp: TariCarteVerde;  
  public CommonFunctions = CommonFunctions;  

  constructor() { 
  	//this.Zona7 = new Zona7();
  	this.MarciAuto = new MarciAuto();
  	this.MarciAutoTemp = new MarciAuto();
    this.TipVehicul = CommonFunctions.TipVehicul;
    this.TariMotor = new TariCarteVerde();
    this.TariRemorca = new TariCarteVerde();
    this.TariTemp = new TariCarteVerde();
  }

  ngOnInit(): void {
    this.MotorTaraInmatriculare.control.value = this.Zona7.Motor.TaraInmatriculare = "ROMANIA";    
    this.RemorcaTaraInmatriculare.control.value = this.Zona7.Remorca.TaraInmatriculare = "ROMANIA";    

  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona7.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      this.zoneCompleted.emit(this.Zona7);
    }
    CommonFunctions.showDiv(step, visibility);
  }


  onChangeofOptions(newGov):void {
     //console.log(newGov);
  }

  filterItem(event):void{
      if(!event){
          this.MarciAuto.MarciAuto = this.MarciAutoTemp.MarciAuto;
      } // when nothing has typed*/   
      if (typeof event === 'string') {
          console.log(event);
          this.MarciAuto.MarciAuto = this.MarciAutoTemp.MarciAuto.filter(a => a.Model.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
      }
   }   

  filterTari(event, tari:string):void{
      if(!event){
          switch (tari) {
            case "motor":
              this.TariMotor.Tari = this.TariTemp.Tari;
              break;
            case "remorca":
              this.TariRemorca.Tari = this.TariTemp.Tari;
              break;
          }          
      } // when nothing has typed*/   
      if (typeof event === 'string') {
        switch (tari) {
          case "motor":
            this.TariMotor.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
            break;
          case "remorca":
            this.TariRemorca.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
            break;
        }
      }
   }  
}
