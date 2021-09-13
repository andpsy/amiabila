import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { Formular, Utilizator } from '../entities'; 
import { CommonFunctions, USE_FORM } from '../commonfunctions';
import { MongoDbService } from '../mongo-db.service';

@Component({
  selector: 'app-trimitere',
  templateUrl: './trimitere.component.html',
  styleUrls: ['./trimitere.component.css']
})
export class TrimitereComponent implements OnInit {
  @ViewChild("childForm", {static: true}) childForm;
  @Input() Formular: Formular; 
  @Input() step: number;  
  @Output() zoneCompleted = new EventEmitter();
  @Output() sendCompleted = new EventEmitter();

  public CommonFunctions = CommonFunctions;  
  public use_form = USE_FORM;
  public zonashow = null;
  public icon = null;

  constructor(private mongoDbSrv: MongoDbService) { }

  ngOnInit(): void {
    this.zonashow = this.step == 25 ? true : false;
    this.icon = this.step == 25 ? 'expand_less' : 'expand_more';
    //var u1 = new Utilizator();
    //this.Formular.Utilizatori.push(u1);
    this.Formular.Utilizatori[0].Email = this.Formular.VehiculA.Zona6.Email;
    this.Formular.Utilizatori[0].Telefon = this.Formular.VehiculA.Zona6.Telefon;
    this.Formular.Utilizatori[0].Litera = "A";
    //var u2 = new Utilizator();
    //this.Formular.Utilizatori.push(u2);
    this.Formular.Utilizatori[1].Email = this.Formular.VehiculB.Zona6.Email;
    this.Formular.Utilizatori[1].Telefon = this.Formular.VehiculB.Zona6.Telefon;
    this.Formular.Utilizatori[1].Litera = "B";
  } 

  ngAfterViewInit(): void {
  }  

  changeZona(){
    this.zonashow = !this.zonashow;
    this.icon = !this.zonashow ? 'expand_more' : 'expand_less'
    this.ngAfterViewInit();
  } 

  public Trimite(){
    console.log('aici');
    this.zoneCompleted.emit(this.Formular);

    var url = this.CommonFunctions.SRV_URL + 'Users/SendFirstEmail';
    this.mongoDbSrv
     .genericPost(url, this.Formular)
     .subscribe(
       response => {          
         console.log(response);         
         this.sendCompleted.emit(response);
       }
      ); 
  }  

}
