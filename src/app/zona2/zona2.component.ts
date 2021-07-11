import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonFunctions, Zona2, TariCarteVerde, TaraCarteVerde } from '../entities';
import { GoogleMap } from '@angular/google-maps'

@Component({
  selector: 'app-zona2',
  templateUrl: './zona2.component.html',
  styleUrls: ['./zona2.component.css']
})
export class Zona2Component implements OnInit {
	//public Zona2: Zona2;
	@ViewChild("childForm", {static: true}) childForm;
  @ViewChild("Tara", {static: true}) Tara;
  @Input() Zona2: Zona2;  
  @Output() zoneCompleted = new EventEmitter();
  @Output() imgMapEvent = new EventEmitter<string>();
  @Input() step: number;  
  public Tari: TariCarteVerde;
  public TariTemp: TariCarteVerde;  
  public CommonFunctions = CommonFunctions;  
  adresa:string;
  public autocomplete;
  public newPosition: google.maps.LatLngBounds = null;
  public NewPlaceSelected;

  constructor() { 
  	//this.Zona2 = new Zona2();
    this.Tari = new TariCarteVerde();
    this.TariTemp = new TariCarteVerde();
  }

  initAutocomplete(){
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("Loc") as HTMLInputElement,
      {
        types:['address'],
        componentRestrictions:{'country':['RO']},
        fields:['address_components','geometry']
      });
    //this.autocomplete.addListener('place_changed', this.onPlaceChanged);
    this.autocomplete.addListener('place_changed', this.onPlaceChanged.bind(this));

  }
  autocompleteSetBounds(){
    if(this.newPosition != null){
      this.autocomplete.setBounds(this.newPosition);
    }
  }

  onPlaceChanged(){
    var place = this.autocomplete.getPlace();
    if(!place.geometry){
      //user didn't select a place
      (document.getElementById("Loc") as HTMLInputElement).placeholder = "Selectati locatia";
    }else{
      //this.Zona2.Loc = place.formatted_address; //.adr_address;
      this.NewPlaceSelected = place;
    }
  }
  ngAfterViewInit() {
    this.initAutocomplete();
  }  

  ngOnInit(): void {
    if(this.Zona2.Tara == null){
      //this.filterText.setValue({name: 'ROMANIA'});
      this.Tara.control.value = this.Zona2.Tara = "ROMANIA";
      console.log(this.Tara.control.value, this.Zona2.Tara);
    }
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona2.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona2);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  filterItem(event):void{
      if(!event){
          this.Tari.Tari = this.TariTemp.Tari;
      } // when nothing has typed*/   
      if (typeof event === 'string') {
          //console.log(event);
          this.Tari.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                                             .startsWith(event.toLowerCase())); 
      }
   }    
}
