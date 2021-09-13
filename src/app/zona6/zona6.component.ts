import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { Zona6, Polita, TariCarteVerde, TaraCarteVerde } from '../entities';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PolitaComponent} from '../polita/polita.component';
import { CommonFunctions, USE_FORM } from '../commonfunctions';

@Component({
  selector: 'app-zona6',
  templateUrl: './zona6.component.html',
  styleUrls: ['./zona6.component.css']
})
export class Zona6Component implements OnInit, AfterViewInit {
	//public Zona6: Zona6;
	@ViewChild("childForm", {static: true}) childForm;
  @ViewChild("Tara", {static: true}) Tara;
  @Input() Zona6: Zona6;  
  @Input() Polita: Polita;  
  @Input() PolitaNr: string;  
  @Output() zoneCompleted = new EventEmitter();
  @Output() politaFound = new EventEmitter();
  @Input() step: number;  
  public Tari: TariCarteVerde;
  public TariTemp: TariCarteVerde;  
  public CommonFunctions = CommonFunctions;  
  public use_form = USE_FORM;
  public zonashow = null;
  public icon = null;

  constructor(public dialog: MatDialog) { 
  	//this.Zona6 = new Zona6();
    this.Tari = new TariCarteVerde();
    this.TariTemp = new TariCarteVerde();
  }

  ngOnInit(): void {
    this.zonashow = this.step == 25 ? true : false;
    this.icon = this.step == 25 ? 'expand_less' : 'expand_more';
    this.Tara.control.value = this.Zona6.Tara = "ROMANIA";
  } 

  ngAfterViewInit(): void {
    if( (this.use_form || (!this.use_form && this.zonashow)) && (this.checkPolita()))
      this.openPolitaDialog();
  }

  checkPolita(){
    return (this.Polita == null || Object.keys(this.Polita).length == 0) && this.PolitaNr == null;
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona6.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.Zona6);
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

  openPolitaDialog(){
    const dialogRef = this.dialog.open(PolitaComponent, {
      
      maxWidth: '80vw !important',
      minWidth: '80vw !important',
      width: '80vw !important',
      maxHeight: '300px !important',
      minHeight: '300px !important',
      height: '300px !important',      
      disableClose: true,
      data: this.Polita
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if(result != null)
        this.politaFound.emit(result);
    });    
  }

  changeZona(){
    this.zonashow = !this.zonashow;
    this.icon = !this.zonashow ? 'expand_more' : 'expand_less'
    this.ngAfterViewInit();
  }
  
}
