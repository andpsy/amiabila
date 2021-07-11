export const GOOGLE_API_KEY = "AIzaSyBDS3LAPdSf1eV6wFFgxsjkn0qNJCuC2Eo";

export const DD_MM_YYYY_Format = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

export class ImgMapList{
  "Id":string;
  "RotateStep":number;
  "MoveStepX":number;
  "MoveStepY":number;
}

export class Marker {
  position: {
    lat: any,
    lng: any,
  };
  label: {
    color: string,
    text: string,
  };
  title: string;
  options: { animation: any };

  constructor(){
    this.position = {
      'lat': null,
      'lng': null,
    };
    this.label = {
      'color': null,
      'text': null,
    };
    this.title = null;
    this.options = { 'animation': null };
  }
}; 

export class CommonFunctions{
  public static DISABLE_BUTTONS_ON_VALIDATION_ERROR = false;
  // public static GOOGLE_API_KEY = "AIzaSyCgXPkbiFYrV2Na-_XmGN0sUjAUq3WVKCs";
  public static IMG_CAPTURE_ZOOM = 20;
  public static IMG_CAPTURE_SIZE = "300x300";
  public static IMG_MAP_ID = "roadmap";

  public static SRV_URL = "https://localhost:44322/api/";
  public static SRV_RESOURCES_URL = "https://localhost:44322/Resources/Formulare/";

  public static isNullOrWhiteSpaces(str){
    return str === null || str.trim() === '';
  } 

  public static step:number = null;

  public static addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  public static _cale_parts = "assets/_parts_small/";

  public static TipVehicul = ["autoturism", "motocicleta", "camion", "altul"];

  public static ZoneImpact = [{"id":1, "zona":"fata"}, 
    {"id":2, "zona":"stanga-fata"}, 
    {"id":3, "zona":"stanga"}, 
    {"id":4, "zona":"stanga-spate"}, 
    {"id":5, "zona":"spate"},     
    {"id":6, "zona":"dreapta-spate"}, 
    {"id":7, "zona":"dreapta"}, 
    {"id":8, "zona":"dreapta-fata"}];

  public static DocumenteNecesare = [{"selected":false, "name":"CI soferi"}, 
    {"selected":false, "name":"Permise conducere soferi"}, 
    {"selected":false, "name":"Polite auto RCA"}, 
    {"selected":false, "name":"Alte acte"}];

  public static TipPoze = [{"selected":false, "name":"1. Carte/Buletin de identitate:"}, 
    {"selected":false, "name":"2. Permis de conducere:"},     
    {"selected":false, "name":"3. Imagini avarii auto:"}];

  public static showDiv(step:number, visibility:boolean):void{
    /*
    var divId = CommonFunctions.Steps[step].DivId;
    var div = document.querySelector("#"+divId) as HTMLElement;
    //div.style.visibility = visibility ? "visible" : "hidden";
    //div.style.width = visibility ? "90%" : "0px";
    div.style.left = visibility ? "0px" : "-100%";
    var mainDiv = document.querySelector("#mainDiv") as HTMLElement;
    mainDiv.style.visibility = visibility ? 'hidden' : 'visible';
    mainDiv.style.overflow = visibility ? 'hidden' : 'auto';   
    */
    CommonFunctions.step = visibility ? step : null;
  }  

  public static Steps = [
      {'Step':0, 'DivId':'zona1Div', 'vehicul':null, 'zona':'Zona1', 'bgColor':'lightgray', 'color':'navy'},
      {'Step':1, 'DivId':'zona2Div', 'vehicul':null, 'zona':'Zona2', 'bgColor':'lightgray', 'color':'navy'},
      {'Step':2, 'DivId':'zona3Div', 'vehicul':null, 'zona':'Zona3', 'bgColor':'lightgray', 'color':'navy'},
      {'Step':3, 'DivId':'zona4Div', 'vehicul':null, 'zona':'Zona4', 'bgColor':'lightgray', 'color':'navy'},
      {'Step':4, 'DivId':'zona5Div', 'vehicul':null, 'zona':'Zona5', 'bgColor':'lightgray', 'color':'navy'},

      {'Step':5, 'DivId':'zona6ADiv', 'vehicul':'A', 'zona':'Zona6', 'bgColor':'#1D3885', 'color':'white'},
      {'Step':6, 'DivId':'zona7ADiv', 'vehicul':'A', 'zona':'Zona7', 'bgColor':'#1D3885', 'color':'white'},
      {'Step':7, 'DivId':'zona8ADiv', 'vehicul':'A', 'zona':'Zona8', 'bgColor':'#1D3885', 'color':'white'},
      {'Step':8, 'DivId':'zona9ADiv', 'vehicul':'A', 'zona':'Zona9', 'bgColor':'#1D3885', 'color':'white'},
      {'Step':9, 'DivId':'zona10ADiv', 'vehicul':'A', 'zona':'Zona10', 'bgColor':'#1D3885', 'color':'white'},
      {'Step':10, 'DivId':'zona11ADiv', 'vehicul':'A', 'zona':'Zona11', 'bgColor':'#1D3885', 'color':'white'},
      {'Step':11, 'DivId':'zona14ADiv', 'vehicul':'A', 'zona':'Zona14', 'bgColor':'#1D3885', 'color':'white'},
      {'Step':12, 'DivId':'zona15ADiv', 'vehicul':'A', 'zona':'Zona15', 'bgColor':'#1D3885', 'color':'white'},
      {'Step':13, 'DivId':'fisiereADiv', 'vehicul':'A', 'zona':'ZonaFisiere', 'bgColor':'#1D3885', 'color':'white'},

      {'Step':14, 'DivId':'zona6BDiv', 'vehicul':'B', 'zona':'Zona6', 'bgColor':'#F8D32D', 'color':'black'},
      {'Step':15, 'DivId':'zona7BDiv', 'vehicul':'B', 'zona':'Zona7', 'bgColor':'#F8D32D', 'color':'black'},
      {'Step':16, 'DivId':'zona8BDiv', 'vehicul':'B', 'zona':'Zona8', 'bgColor':'#F8D32D', 'color':'black'},
      {'Step':17, 'DivId':'zona9BDiv', 'vehicul':'B', 'zona':'Zona9', 'bgColor':'#F8D32D', 'color':'black'},
      {'Step':18, 'DivId':'zona10BDiv', 'vehicul':'B', 'zona':'Zona10', 'bgColor':'#F8D32D', 'color':'black'},
      {'Step':19, 'DivId':'zona11BDiv', 'vehicul':'B', 'zona':'Zona11', 'bgColor':'#F8D32D', 'color':'black'},
      {'Step':20, 'DivId':'zona14BDiv', 'vehicul':'B', 'zona':'Zona14', 'bgColor':'#F8D32D', 'color':'black'},
      {'Step':21, 'DivId':'zona15BDiv', 'vehicul':'B', 'zona':'Zona15', 'bgColor':'#F8D32D', 'color':'black'},
      {'Step':22, 'DivId':'fisiereBDiv', 'vehicul':'B', 'zona':'ZonaFisiere', 'bgColor':'#F8D32D', 'color':'black'},

      {'Step':23, 'DivId':'zona12Div', 'vehicul':null, 'zona':'Zona12', 'bgColor':'lightgray', 'color':'navy'},
      {'Step':24, 'DivId':'zona13Div', 'vehicul':null, 'zona':'Zona13', 'bgColor':'lightgray', 'color':'navy'}];

  public static getPreviousStepDivId(idx:number):string{
    return idx < 1 ? null : CommonFunctions.Steps[idx-1].DivId;
  }
  public static getNextStepDivId(idx:number):string{
    return idx > CommonFunctions.Steps.length - 2 ? null : CommonFunctions.Steps[idx+1].DivId;
  }  

  public static copyObj(source:any, target:any){
    const props = Object.keys(source);
    for (const prop of props) {
      var objVal = source[prop];
      if(typeof objVal === 'object' && objVal !== null)
        target[prop] = CommonFunctions.copyObj(objVal, target[prop]);
      else
        target[prop]=objVal;
    }
    return target;
  }
}

export class Polita{
  Serie: string;
  Numar: string;
  DenumireAsigurator: string;
  AgentieAsigurator: string;
  DenumireBrokerAgent: string;
  NrAuto: string;
  NrSasiuAuto: string;
  TipAuto: string;
  MarcaAuto: string;
  DenumireAsiguratProprietar: string;
  CuiAsiguratProprietar: string;
  DenumireAsiguratUtilizator: string;
  CuiAsiguratUtilizator: string;
  AdresaAsigurat: string;
  TaraAsigurat: string;
  TelefonAsigurat: string;
  EmailAsigurat: string;
  ValabilDeLa: Date;
  ValabilPanaLa: Date;  
}

export class Polite{
  Polite: Polita[];
  constructor(){
    this.Polite = [{"Serie":"RO/22/P22/HI",
      "Numar":"014320853",
      "DenumireAsigurator":"OMNIASIG VIENNA INSURANCE GROUP SA",
      "AgentieAsigurator":"Titulescu",
      "DenumireBrokerAgent":"ILEANA VASILE",
      "NrAuto":"B65LNO",
      "NrSasiuAuto":"UU1HSDADG52730748",
      "TipAuto":"autoturism",
      "MarcaAuto":"DACIA",
      "DenumireAsiguratProprietar":"TERMODINAMIC SRL",
      "CuiAsiguratProprietar":"10078376",
      "DenumireAsiguratUtilizator":"TERMODINAMIC SRL",
      "CuiAsiguratUtilizator":"10078376",
      "AdresaAsigurat":"Moise Nicoara, nr.36, bl.D2, sc.A, ap.34, Bucuresti, Sector 3",
      "TaraAsigurat":"ROMANIA",
      "TelefonAsigurat":"0724000880",
      "EmailAsigurat":null,
      "ValabilDeLa":new Date('2021-05-10T00:00:00'),
      "ValabilPanaLa":new Date('2022-05-09T00:00:00')},
      {"Serie":"RO/22/P22/HI",
      "Numar":"014110114",
      "DenumireAsigurator":"OMNIASIG VIENNA INSURANCE GROUP SA",
      "AgentieAsigurator":"Titulescu",
      "DenumireBrokerAgent":"ILEANA VASILE",
      "NrAuto":"B14HJG",
      "NrSasiuAuto":"MALBA51BP9M058077",
      "TipAuto":"autoturism",
      "MarcaAuto":"HYUNDAI",
      "DenumireAsiguratProprietar":"ELENA LIXANDRU",
      "CuiAsiguratProprietar":"2570702400088",
      "DenumireAsiguratUtilizator":"ELENA LIXANDRU",
      "CuiAsiguratUtilizator":"2570702400088",
      "AdresaAsigurat":"Splaiul Unirii, nr.35, bl.M7, sc.1, ap.1, Bucuresti, Sector 3",
      "TaraAsigurat":"ROMANIA",
      "TelefonAsigurat":"0724000880",
      "EmailAsigurat":null,
      "ValabilDeLa":new Date('2020-09-23T00:00:00'),
      "ValabilPanaLa":new Date('2021-09-22T00:00:00')}
      ];
  }
  public findPolita(numar:string):Polita
  {
    for(var i=0;i<this.Polite.length;i++)
    {
      if(this.Polite[i].Numar == numar){
        return this.Polite[i];
      }
    }
    return null;
  }
}

export class Martor {
  Nume: string;
  Adresa: string;
  Telefon: string;

  constructor(){
    this.Nume = null;
    this.Adresa = null;
    this.Telefon = null;
  }  
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.Nume))
      toReturn.push("Numele martorului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Adresa))
      toReturn.push("Adresa martorului este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Telefon))
      toReturn.push("Telefonul martorului este obligatoriu!");
    return toReturn.length>0 ? toReturn : null;
  }
}

export class Zona1 {
  Data: Date;
  Ora: string;
  StepCompleted: boolean;

  constructor(){
    this.Data = null;
    this.Ora = null;
    this.StepCompleted = false;
  }  
  public hasError():string[]{
    var toReturn:string[] = [];
    if(!this.Data)
      toReturn.push("Data accidentului este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Ora))
      toReturn.push("Ora accidentului este obligatorie!");
    if(!this.checkOra())
      toReturn.push("Format Ora accident invalid!");
    return toReturn.length > 0? toReturn : null;
  }
  public checkOra():boolean{
    if (this.Ora.length != 5) return false;
    if(this.Ora.indexOf(":") == -1) return false;
    var ora = this.Ora.split(":");
    return true;
  }
}
export class Zona2 {
  Loc: string;
  Tara: string;
  StepCompleted: boolean;
  constructor(){
    this.Loc = null;
    this.Tara = null;
    this.StepCompleted = false;
  }  
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.Loc))
      toReturn.push("Locul accidentului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Tara))
      toReturn.push("Tara accidentului este obligatorie!");
    return toReturn.length > 0? toReturn : null;
  }  
}
export class Zona3 {
  VatamariDa: boolean;
  VatamariNu: boolean;
  StepCompleted: boolean;
  Confirma112: boolean;
  constructor(){
    this.VatamariDa = false;
    this.VatamariNu = false;
    this.StepCompleted = false;
    this.Confirma112 = false;
  }  
  public hasError():string[]{
    var toReturn:string[] = [];
    if(!(this.VatamariDa || this.VatamariNu))
      toReturn.push("Selectati daca exista sau nu vatamari corporale!");
    if(this.VatamariDa && !this.Confirma112)
      toReturn.push("Confirmati ca ati sunat la 112!");
    return toReturn.length > 0? toReturn : null;
  }    
}
export class Zona4 {
  PagubeAlteVehicule: boolean;
  PagubeAlteObiecte: boolean;
  Pagube: Pagube;
  StepCompleted: boolean;
  constructor(){
    this.PagubeAlteVehicule = false;
    this.PagubeAlteObiecte = false;
    this.Pagube = new Pagube();
    this.StepCompleted = false;
  }  
  public hasError():string[]{
    var toReturn:string[] = [];

    if(this.PagubeAlteVehicule){
      if(this.Pagube.PagubeAuto.length > 0){
        for(var i=0;i<this.Pagube.PagubeAuto.length;i++){
          var err = this.Pagube.PagubeAuto[i].hasError();
          if(err != null && err.length > 0){
            for(var j=0;j<err.length;j++)
              toReturn.push('Paguba auto ' + (i+1) + ': ' + err[j]);
          }
        }
      }
    }
    if(this.PagubeAlteObiecte){
      if(this.Pagube.PagubeObiecte.length > 0){
        for(var i=0;i<this.Pagube.PagubeObiecte.length;i++){
          var err = this.Pagube.PagubeObiecte[i].hasError();
          if(err != null && err.length > 0){
            for(var j=0;j<err.length;j++)
              toReturn.push('Paguba obiect ' + (i+1) + ': ' + err[j]);
          }
        }
      }
    }

    return toReturn.length > 0? toReturn : null;
  }   
}
export class Zona5 {
  ExistaMartori: boolean;
  Martori: Martor[];
  StepCompleted: boolean;
  constructor(){
    this.ExistaMartori = false;
    this.Martori = [];
    //var m = new Martor();
    //this.Martori.push(m);
    this.StepCompleted = false;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(this.ExistaMartori){
      if(this.Martori.length > 0){
        for(var i=0;i<this.Martori.length;i++){
          var err = this.Martori[i].hasError();
          if(err != null && err.length > 0){
            for(var j=0;j<err.length;j++)
              toReturn.push('Martor ' + (i+1) + ': ' + err[j]);
          }
        }
      }
    }
    return toReturn.length > 0? toReturn : null;
  }   
}

export class Zona6 {
  Nume: string;
  Prenume: string;
  Adresa: string;
  CodPostal: string;
  Tara: string;
  Telefon: string;
  Email: string;
  StepCompleted: boolean;
  constructor(){
    this.Nume = null;
    this.Prenume = null;
    this.Adresa = null;
    this.CodPostal = null;
    this.Tara = null;
    this.Telefon = null;
    this.Email = null;
    this.StepCompleted = false;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.Nume))
      toReturn.push("Numele asiguratului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Prenume))
      toReturn.push("Prenumele asiguratului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Adresa))
      toReturn.push("Adresa asiguratului este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Tara))
      toReturn.push("Tara asiguratului este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Telefon) && CommonFunctions.isNullOrWhiteSpaces(this.Email))
      toReturn.push("Telefonul sau emailul asiguratului este obligatoriu!");
    return toReturn.length > 0? toReturn : null;
  }    
}
export class Motor {
  MarcaAuto: MarcaAuto;
  Marca: string;
  Tip: string;
  TipAltul: string;
  NrInmatriculare: string;
  TaraInmatriculare: string;
  constructor(){
    this.Marca = null;
    this.Tip = null;
    this.TipAltul = null;
    this.NrInmatriculare = null;
    this.TaraInmatriculare = null;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.Marca))
      toReturn.push("Marca vehicului este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Tip))
      toReturn.push("Tipul vehicului este obligatoriu!");
    else
      if(this.Tip.toLowerCase() == 'altul' && CommonFunctions.isNullOrWhiteSpaces(this.TipAltul))
        toReturn.push("Tipul vehicului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.NrInmatriculare))
      toReturn.push("Numarul de inmatriculare a vehicului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.TaraInmatriculare))
      toReturn.push("Tara in care este inmatriculat vehiculul este obligatorie!");
    return toReturn.length > 0? toReturn : null;
  } 
}
export class Remorca {
  NrInmatriculare: string;
  TaraInmatriculare: string;
  constructor(){
    this.NrInmatriculare = null;
    this.TaraInmatriculare = null;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.NrInmatriculare))
      toReturn.push("Numarul de inmatriculare a remorcii este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.TaraInmatriculare))
      toReturn.push("Tara in care este inmatriculata remorca este obligatorie!");
    return toReturn.length > 0? toReturn : null;
  }   
}
export class Zona7 {
  Motor: Motor;
  Remorca: Remorca;
  StepCompleted: boolean;
  constructor(){
    this.Motor = new Motor();
    this.Remorca = new Remorca();
    this.StepCompleted = false;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    var errMotor = this.Motor.hasError();
    var errRemorca = this.Remorca.hasError();
    if(errMotor != null && errMotor.length > 0)
      for(var i=0;i<errMotor.length;i++)
        toReturn.push("Motor: " + errMotor[i]);
    if(errRemorca != null && errRemorca.length > 0)
      for(var i=0;i<errRemorca.length;i++)
        toReturn.push("Remorca: " + errRemorca[i]);
    return toReturn.length > 0? toReturn : null;
  }   
}
export class Zona8 {
  Denumire: string;
  PolitaNr: string;
  CarteVerdeNr: string;
  ValabilDeLa: Date;
  ValabilPanaLa: Date;
  Sucursala: string;
  DenumireSucursala: string;
  Adresa: string;
  Tara: string;
  Telefon: string;
  Email: string;
  Casco: boolean;
  DecontareDirecta: boolean;
  StepCompleted: boolean;
  DenumireCasco: string;
  NrPolitaCasco: string;
  constructor(){
    this.Denumire = null;
    this.PolitaNr = null;
    this.CarteVerdeNr = null;
    this.ValabilDeLa = null;
    this.ValabilPanaLa = null;
    this.Sucursala = null;
    this.DenumireSucursala = null;
    this.Adresa = null;
    this.Tara = null;
    this.Telefon = null;
    this.Email = null;
    this.Casco = false;
    this.DecontareDirecta = false;
    this.DenumireCasco = null;
    this.NrPolitaCasco = null;
    this.StepCompleted = false;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.Denumire))
      toReturn.push("Denumirea societatii de asigurare este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.PolitaNr))
      toReturn.push("Polita de asigurare este obligatorie!");
    if(this.ValabilDeLa == null || this.ValabilPanaLa == null)
      toReturn.push("Perioada de valabilitate a politei de asigurare este obligatorie!");
    if(this.ValabilDeLa >= this.ValabilPanaLa)
      toReturn.push("Perioada de valabilitate a politei de asigurare este incorecta!");
    return toReturn.length > 0? toReturn : null;
  }   
}
export class Zona9 {
  IdenticCuAsiguratul: boolean;
  Nume: string;
  Prenume: string;
  DataNasterii: Date;
  Adresa: string;
  Tara: string;
  Telefon: string;
  Email: string;
  PermisConducereNr: string;
  Categoria: string;
  ValabilPanaLa: Date;
  StepCompleted: boolean;
  constructor(){
    this.IdenticCuAsiguratul = false;
    this.Nume = null;
    this.Prenume = null;
    this.DataNasterii = null;
    this.Adresa = null;
    this.Tara = null;
    this.Telefon = null;
    this.Email = null;
    this.PermisConducereNr = null;
    this.Categoria = null;
    this.ValabilPanaLa = null;    
    this.StepCompleted = false;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.Nume))
      toReturn.push("Numele conducatorului auto este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Prenume))
      toReturn.push("Prenumele conducatorului auto este obligatoriu!");
    if(this.DataNasterii == null)
      toReturn.push("Data nasterii este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Adresa))
      toReturn.push("Adresa conducatorului auto este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Tara))
      toReturn.push("Tara conducatorului auto este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.PermisConducereNr))
      toReturn.push("Permisul de conducere al soferului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Categoria))
      toReturn.push("Categoria permisului de conducere al soferului este obligatorie!");
    if(this.ValabilPanaLa == null)
      toReturn.push("Valabilitatea permisului de conducere este obligatorie!");
    else{
      var d = new Date();
      if(this.ValabilPanaLa < d)
        toReturn.push("Permisul nu este valid!");
    }
    return toReturn.length > 0? toReturn : null;
  }   
}
export class Zona10 {
  PunctImpact: string;
  StepCompleted: boolean;
  constructor(){
    this.PunctImpact = null;
    this.StepCompleted = false;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.PunctImpact))
      toReturn.push("Selectati zona de impact!");
    return toReturn.length > 0? toReturn : null;
  }     
}
export class Zona11 {
  Pagube: string[];
  StepCompleted: boolean;
  constructor(){
    this.Pagube = [];
    this.StepCompleted = false;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(this.Pagube == null || this.Pagube.length == 0)
      toReturn.push("Indicati pagubele!");
    return toReturn.length > 0? toReturn : null;
  }     
}
export class Zona14 {
  Observatii: string;
  StepCompleted: boolean;
  constructor(){
    this.Observatii = null;
    this.StepCompleted = false;   
  }
}
export class Zona15 {
  CaleSemnatura: string;
  StepCompleted: boolean;
  constructor(){
    this.CaleSemnatura = null;
    this.StepCompleted = false;    
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.CaleSemnatura))
      toReturn.push("Semnatura conducatorului auto este obligatorie!");
    return toReturn.length > 0? toReturn : null;
  }     
}

export class Aditionale {
  Conditii: boolean;
  DocumenteNecesare: boolean;
  GDPR: boolean;
  TermeniSiConditii: boolean; 

  PagubitDecontareDirecta: boolean;
  //PagubitSocietateDecontareDirecta: string;
  VinovatCasco: boolean;
  //VinovatSocietateCasco: string;
  StepCompleted: boolean;
  constructor(){
    this.Conditii = true;
    this.DocumenteNecesare = true;
    this.GDPR = true;
    this.TermeniSiConditii = false; 
    // mai sus true - pt. teste 

    this.PagubitDecontareDirecta = false;
    //this.PagubitSocietateDecontareDirecta = null;
    this.VinovatCasco = false;
    //this.VinovatSocietateCasco = null;
    this.StepCompleted = false;    
  }
}

export class ZonaFisiere{
  Fisiere: Fisier[] = [];
  StepCompleted: boolean;

  public hasError():string[]{
    var toReturn:string[] = [];
    if(this.Fisiere.length < 3)
      toReturn.push("Incarcati documentele!");
    else if(this.Fisiere[0].Tip.indexOf("identitate")<0 && this.Fisiere[1].Tip.indexOf("conducere")<0 && this.Fisiere[2].Tip.indexOf("avarii")<0 ){
      toReturn.push("Incarcati documentele!");
    }
    return toReturn.length > 0? toReturn : null;
  }  
}

export class Vehicul {
  Polita: Polita;
  Zona6: Zona6;
  Zona7: Zona7;
  Zona8: Zona8;
  Zona9: Zona9;
  Zona10: Zona10;
  Zona11: Zona11;
  Zona14: Zona14;
  Zona15: Zona15;
  ZonaFisiere: ZonaFisiere;

  constructor(){
    this.Polita = new Polita();
    this.Zona6 = new Zona6();
    this.Zona7 = new Zona7();
    this.Zona8 = new Zona8();
    this.Zona9 = new Zona9();
    this.Zona10 = new Zona10();
    this.Zona11 = new Zona11();
    this.Zona14 = new Zona14();
    this.Zona15 = new Zona15();
    this.ZonaFisiere = new ZonaFisiere();
  }
}

export class Zona12 {
  Imprejurari: ImprejurariProducereAccident;
  CasuteA: number;
  CasuteB: number;
  StepCompleted: boolean;
  VinovatEstimat: string;
  VinovatSelectat: string;
  constructor(){
    this.Imprejurari = new ImprejurariProducereAccident();
    this.CasuteA = 0;
    this.CasuteB = 0;
    this.StepCompleted = false;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(this.CasuteA == 0 || this.CasuteB == 0)
      toReturn.push("Selectati cel putin o situatie pentru fiecare conducator auto!");
    return toReturn.length > 0? toReturn : null;
  }  

  public reverseVinovat():string{
    return this.VinovatEstimat == "A" ? "B" : (this.VinovatEstimat == "B" ? "A" : null);
  }

  public stabilireVinovatie():void{
    //Daca am 1 la A si orice alta varianta la B este vinovat B/si invers
    if(this.Imprejurari.Imprejurari[0].VehiculA && !this.Imprejurari.Imprejurari[0].VehiculB) this.VinovatEstimat = "B";
    if(!this.Imprejurari.Imprejurari[0].VehiculA && this.Imprejurari.Imprejurari[0].VehiculB) this.VinovatEstimat = "A";

    //Daca am 2 la A si orice alta varianta la B este vinovat A/si invers
    if(!this.Imprejurari.Imprejurari[1].VehiculA && this.Imprejurari.Imprejurari[1].VehiculB) this.VinovatEstimat = "B";
    if(this.Imprejurari.Imprejurari[1].VehiculA && !this.Imprejurari.Imprejurari[1].VehiculB) this.VinovatEstimat = "A";

    //Daca am 3 la A si orice alta varianta la B este vinovat B/si invers
    if(this.Imprejurari.Imprejurari[2].VehiculA && !this.Imprejurari.Imprejurari[2].VehiculB) this.VinovatEstimat = "B";
    if(!this.Imprejurari.Imprejurari[2].VehiculA && this.Imprejurari.Imprejurari[2].VehiculB) this.VinovatEstimat = "A";

    //Daca am 4 la A si orice alta varianta la B este vinovat A/si invers
    if(!this.Imprejurari.Imprejurari[3].VehiculA && this.Imprejurari.Imprejurari[3].VehiculB) this.VinovatEstimat = "B";
    if(this.Imprejurari.Imprejurari[3].VehiculA && !this.Imprejurari.Imprejurari[3].VehiculB) this.VinovatEstimat = "A";

    //Daca am 5 la A si 8 la B este vinovat B/si invers
    if(this.Imprejurari.Imprejurari[4].VehiculA && this.Imprejurari.Imprejurari[7].VehiculB) this.VinovatEstimat = "B";
    if(this.Imprejurari.Imprejurari[4].VehiculB && this.Imprejurari.Imprejurari[7].VehiculA) this.VinovatEstimat = "A";

    //Daca am 6 la A si 7 la B este vinovat A/si invers
    if(this.Imprejurari.Imprejurari[5].VehiculA && this.Imprejurari.Imprejurari[6].VehiculB) this.VinovatEstimat = "A";
    if(this.Imprejurari.Imprejurari[5].VehiculB && this.Imprejurari.Imprejurari[6].VehiculA) this.VinovatEstimat = "B";

    //Daca am 9 la A si 10 la B este vinovat B/si invers
    if(this.Imprejurari.Imprejurari[8].VehiculA && this.Imprejurari.Imprejurari[9].VehiculB) this.VinovatEstimat = "B";
    if(this.Imprejurari.Imprejurari[8].VehiculB && this.Imprejurari.Imprejurari[9].VehiculA) this.VinovatEstimat = "A";

    //Daca am 11 la A si 12 sau 15 la B este vinovat B/si invers
    if(this.Imprejurari.Imprejurari[10].VehiculA && (this.Imprejurari.Imprejurari[11].VehiculB || this.Imprejurari.Imprejurari[14].VehiculB)) this.VinovatEstimat = "B";
    if(this.Imprejurari.Imprejurari[10].VehiculB && (this.Imprejurari.Imprejurari[11].VehiculA || this.Imprejurari.Imprejurari[14].VehiculA)) this.VinovatEstimat = "A";

    //Daca am 11 la A si orice la B, mai putin 12 si 15 , este vinovat A/si invers
    if(this.Imprejurari.Imprejurari[10].VehiculA && !(this.Imprejurari.Imprejurari[11].VehiculB || this.Imprejurari.Imprejurari[14].VehiculB)) this.VinovatEstimat = "A";
    if(this.Imprejurari.Imprejurari[10].VehiculB && !(this.Imprejurari.Imprejurari[11].VehiculA || this.Imprejurari.Imprejurari[14].VehiculA)) this.VinovatEstimat = "B";

    //Daca am 16 la A si orice la B este vinovat B
    if(!this.Imprejurari.Imprejurari[15].VehiculA && this.Imprejurari.Imprejurari[15].VehiculB) this.VinovatEstimat = "B";
    if(this.Imprejurari.Imprejurari[15].VehiculA && !this.Imprejurari.Imprejurari[15].VehiculB) this.VinovatEstimat = "A";

    //Daca am 17 la A si orice la B este vinovat B.    
    if(!this.Imprejurari.Imprejurari[16].VehiculA && this.Imprejurari.Imprejurari[16].VehiculB) this.VinovatEstimat = "B";
    if(this.Imprejurari.Imprejurari[16].VehiculA && !this.Imprejurari.Imprejurari[16].VehiculB) this.VinovatEstimat = "A";
    
  }
}

export class Zona13 {
  CaleSchita: string;
  ImgMap: string;
  StepCompleted: boolean;
  constructor(){
    this.CaleSchita = null;
    this.ImgMap = null;
    this.StepCompleted = false;    
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.CaleSchita))
      toReturn.push("Desenati schita accidentului!");
    return toReturn.length > 0? toReturn : null;
  }  

}

export class Fisier{
  Tip: string;
  DenumireClient: string;
  DenumireServer: string; 
}

export class Formular {
  Id: string;
  Zona1: Zona1;
  Zona2: Zona2;
  Zona3: Zona3;
  Zona4: Zona4;
  Zona5: Zona5;
  VehiculA: Vehicul; 
  VehiculB: Vehicul;
  Zona12: Zona12;
  Zona13: Zona13;
  Aditionale: Aditionale;

  constructor(f?:Formular){
    if(f == null){
      this.Id = null;
      this.Zona1 = new Zona1();
      this.Zona2 = new Zona2();
      this.Zona3 = new Zona3();
      this.Zona4 = new Zona4();
      this.Zona5 = new Zona5();
      this.VehiculA = new Vehicul();
      this.VehiculB = new Vehicul();
      this.Zona12 = new Zona12();
      this.Zona13 = new Zona13();    
      this.Aditionale = new Aditionale();
    }else{
      this.Id = f.Id;
      this.Zona1 = Object.assign(this.Zona1, f.Zona1);
      this.Zona2 = Object.assign(this.Zona2, f.Zona2);
      this.Zona3 = Object.assign(this.Zona3, f.Zona3);
      this.Zona4 = Object.assign(this.Zona4, f.Zona4);
      this.Zona5 = Object.assign(this.Zona5, f.Zona5);
      this.VehiculA = Object.assign(this.VehiculA, f.VehiculA);
      this.VehiculB = Object.assign(this.VehiculB, f.VehiculB);
      this.Zona12 = Object.assign(this.Zona12, f.Zona12);
      this.Zona13 = Object.assign(this.Zona13, f.Zona13);
      this.Aditionale = Object.assign(this.Aditionale, f.Aditionale);
    }
  }

  public populateFormularFromPolita(vehicul:string){
    if(vehicul=='A'){
      this.VehiculA.Zona6.Nume = this.VehiculA.Polita.DenumireAsiguratProprietar;
      this.VehiculA.Zona6.Prenume = this.VehiculA.Polita.DenumireAsiguratProprietar;
      this.VehiculA.Zona6.Adresa = this.VehiculA.Polita.AdresaAsigurat;
      this.VehiculA.Zona6.Tara = this.VehiculA.Polita.TaraAsigurat;
      this.VehiculA.Zona6.Telefon = this.VehiculA.Polita.TelefonAsigurat;
      this.VehiculA.Zona6.Email =  this.VehiculA.Polita.EmailAsigurat;
      this.VehiculA.Zona7.Motor.Tip = this.VehiculA.Polita.TipAuto;
      this.VehiculA.Zona7.Motor.NrInmatriculare = this.VehiculA.Polita.NrAuto;
      this.VehiculA.Zona7.Motor.Marca = this.VehiculA.Polita.MarcaAuto;
      this.VehiculA.Zona8.Denumire = this.VehiculA.Polita.DenumireAsigurator;
      this.VehiculA.Zona8.PolitaNr = this.VehiculA.Polita.Numar;
      this.VehiculA.Zona8.ValabilDeLa = this.VehiculA.Polita.ValabilDeLa;
      this.VehiculA.Zona8.ValabilPanaLa = this.VehiculA.Polita.ValabilPanaLa;
      this.VehiculA.Zona9.Nume = this.VehiculA.Polita.DenumireAsiguratUtilizator;
      this.VehiculA.Zona9.Prenume = this.VehiculA.Polita.DenumireAsiguratUtilizator;
    }else{
      this.VehiculB.Zona6.Nume = this.VehiculB.Polita.DenumireAsiguratProprietar;
      this.VehiculB.Zona6.Prenume = this.VehiculB.Polita.DenumireAsiguratProprietar;
      this.VehiculB.Zona6.Adresa = this.VehiculB.Polita.AdresaAsigurat;
      this.VehiculB.Zona6.Tara = this.VehiculB.Polita.TaraAsigurat;
      this.VehiculB.Zona6.Telefon = this.VehiculB.Polita.TelefonAsigurat;
      this.VehiculA.Zona6.Email =  this.VehiculB.Polita.EmailAsigurat;
      this.VehiculB.Zona7.Motor.Tip = this.VehiculB.Polita.TipAuto;
      this.VehiculB.Zona7.Motor.NrInmatriculare = this.VehiculB.Polita.NrAuto;
      this.VehiculB.Zona7.Motor.Marca = this.VehiculB.Polita.MarcaAuto;
      this.VehiculB.Zona8.Denumire = this.VehiculB.Polita.DenumireAsigurator;
      this.VehiculB.Zona8.PolitaNr = this.VehiculB.Polita.Numar;
      this.VehiculB.Zona8.ValabilDeLa = this.VehiculB.Polita.ValabilDeLa;
      this.VehiculB.Zona8.ValabilPanaLa = this.VehiculB.Polita.ValabilPanaLa;
      this.VehiculB.Zona9.Nume = this.VehiculB.Polita.DenumireAsiguratUtilizator;
      this.VehiculB.Zona9.Prenume = this.VehiculB.Polita.DenumireAsiguratUtilizator;
    }
  }

  public getPrererquisites():boolean{
    try{
      //console.log(this);
      return this.Aditionale.Conditii && this.Aditionale.DocumenteNecesare && this.Aditionale.GDPR && this.Aditionale.TermeniSiConditii;
      //return true;
    }catch(e){return false;}
  }

  public getPreviousZoneCompletedStatus(step):boolean{
    if(CommonFunctions.DISABLE_BUTTONS_ON_VALIDATION_ERROR){
      /*
      var vehicul = null;
      var zona = null;
      if(step > 0 && step <= 5) {vehicul = null; zona = "Zona" + (step+1);}
      if(step > 5 && step < 11) {vehicul = "VehiculA"; zona = "Zona" + step;}
      if(step > 12 && step < 19) {vehicul = "VehiculB"; zona = "Zona" + (step-7);}
      if(step == 11 || step == 19) {vehicul = "VehiculA"; zona = "Zona" + 14;}
      if(step == 12 || step == 20) {vehicul = "VehiculB"; zona = "Zona" + 15;}
      if(step == 21) {vehicul = null; zona = "Zona" + 12;}
      if(step == 22) {vehicul = null; zona = "Zona" + 13;}
      */
      var vehicul = CommonFunctions.Steps[step].vehicul == null ? null : "Vehicul" + CommonFunctions.Steps[step].vehicul;
      var zona = CommonFunctions.Steps[step].zona;

      if(vehicul != null && zona != null)
        return this[vehicul][zona].StepCompleted;
      else
        if(zona != null)
          return this[zona].StepCompleted;
    }
    return true;
  } 

}

export class MarcaAuto {
  Id:number;
  Model:string;
  constructor(id:number, model:string) {
    this.Id = id;
    this.Model = model;
  }  
}
export class ImprejurareProducereAccident{
  Id:number;
  Denumire:string[];
  DenumireSelected:string;
  VehiculA: boolean;
  VehiculB: boolean;
  constructor(){
    this.Id = null;
    this.Denumire = null;
    this.DenumireSelected = null;
    this.VehiculA = null;
    this.VehiculB = null;
  }
}
export class PagubaAuto{
  NrAuto: string;
  Marca: string;
  Model: string;
  constructor(){
    this.NrAuto = null;
    this.Marca = null;
    this.Model = null;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.NrAuto))
      toReturn.push("Numarul vehicului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Marca))
      toReturn.push("Marca vehicului este obligatoriu!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.Model))
      toReturn.push("Modelul vehicului este obligatoriu!");
    return toReturn.length > 0? toReturn : null;
  }  
}
export class PagubaObiect{
  DenumireObiect: string;
  DescrierePaguba: string;
  constructor(){
    this.DenumireObiect = null;
    this.DescrierePaguba = null;
  }
  public hasError():string[]{
    var toReturn:string[] = [];
    if(CommonFunctions.isNullOrWhiteSpaces(this.DenumireObiect))
      toReturn.push("Denumirea obiectului este obligatorie!");
    if(CommonFunctions.isNullOrWhiteSpaces(this.DescrierePaguba))
      toReturn.push("Descrierea pagubei este obligatorie!");
    return toReturn.length > 0? toReturn : null;
  }  
}

export class Pagube{
  PagubeAuto: PagubaAuto[];
  PagubeObiecte: PagubaObiect[];
  constructor(){
    this.PagubeAuto = [];
    this.PagubeObiecte = [];
  }
}

export class ImprejurariProducereAccident{
  Imprejurari: ImprejurareProducereAccident[];
  constructor(){
    this.Imprejurari = [{"Id":1, "Denumire":["în staţionare", "oprit"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":2, "Denumire":["la momentul plecării", "deschizând portiera"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":3, "Denumire":["la momentul opririi"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":4, "Denumire":["ieşind dintr-o parcare auto, loc privat, drum de pământ"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":5, "Denumire":["intrând într-o parcare auto, loc privat, drum de pământ"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":6, "Denumire":["intrând într-un sens giratoriu"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":7, "Denumire":["circulând într-un sens giratoriu"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":8, "Denumire":["lovind spatele unui vehicul în timpul deplasării pe acelaşi sens şi pe aceeaşi bandă"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":9, "Denumire":["deplasându-se în acelaşi sens, dar pe benzi de circulaţie diferite"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":10, "Denumire":["schimbând banda de circulaţie"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":11, "Denumire":["depăşind"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":12, "Denumire":["virând la dreapta"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":13, "Denumire":["virând la stânga"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":14, "Denumire":["mergând cu spatele"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":15, "Denumire":["intrând pe banda destinată pentru circulaţia în sens opus"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":16, "Denumire":["venind din dreapta (într-o intersecţie)"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false},
      {"Id":17, "Denumire":["neobservând indicatorul de prioritate sau lumina roşie a semaforului"], "DenumireSelected":null, "VehiculA":false, "VehiculB":false}];    
  }
}

export class SocietateAsigurare{
  Id: number;
  Denumire: string;
  RCA: boolean;
  Adresa: string;
}

export class SocietatiAsigurare {
  Societati: SocietateAsigurare[];
  constructor() {
    this.Societati=[
      {"Id":1, "Denumire":"ABC ASIGURARI-REASIGURARI S.A.", "RCA":false, "Adresa":"Str. Scoala Floreasca nr. 24, Bucuresti, Sector 1"},
      {"Id":2, "Denumire":"ALLIANZ - TIRIAC ASIGURARI S.A.", "RCA":true, "Adresa":"Str. Caderea Bastiliei nr. 80-84, Subsol, parter (partial - zona sud), et. 1 (partial - zona sud), et. 2, et. 3, et. 4, et. 5, et. 6 (partial - zona sud), Bucuresti, Sector 1"},
      {"Id":3, "Denumire":"ASIGURAREA ROMANEASCA - ASIROM VIENNA INSURANCE GROUP S.A.", "RCA":true, "Adresa":"B-dul Carol I nr. 31-33, cod 020912, Bucuresti, Sector 2"},
      {"Id":4, "Denumire":"ASITO KAPITAL S.A.", "RCA":false, "Adresa":"Str. Elena Vacarescu nr. 100A, Bucuresti, Sector 1"},
      {"Id":5, "Denumire":"BCR ASIGURARI DE VIATA VIENNA INSURANCE GROUP S.A.", "RCA":false, "Adresa":"Str. Rabat, nr. 21, et.2, 3 si 4, Bucuresti, Sector 1"},
      {"Id":6, "Denumire":"BRD ASIGURARI DE VIATA S.A.", "RCA":false, "Adresa":"Strada Gheorghe Polizu, nr. 58-60, etajele 4 (zona 1) 8 (zona 3 si 5) si 9, Bucuresti, Sector 1"},
      {"Id":7, "Denumire":"COMPANIA DE ASIGURARI - REASIGURARI EXIM ROMANIA (CARE - ROMANIA) S.A.", "RCA":false, "Adresa":"Bulevardul Aviatorilor nr. 33, parter, ap.1, Bucuresti, Sector 1"},
      {"Id":8, "Denumire":"ERGO ASIGURARI DE VIATA S.A.", "RCA":false, "Adresa":"Sos. Bucuresti - Ploiesti nr. 1A, Cladirea A, etaj 4, Unitatea 4C, Bucuresti, Sector 1"},
      {"Id":9, "Denumire":"ERGO ASIGURARI S.A. (FOSTA CREDIT EUROPE ASIGURARI - REASIGURARI S.A.)", "RCA":false, "Adresa":"Sos. Bucuresti - Ploiesti nr.1A, cladirea A, Unitatea 4A si 4B, etaj 4 , Bucuresti, Sector 1"},
      {"Id":10, "Denumire":"EUROINS ROMANIA ASIGURARE REASIGURARE S.A.", "RCA":true, "Adresa":"Sos. Bucuresti Nord nr.10, Global City Business Park, Cladirea O23, et. 4, Voluntari, Ilfov"},
      {"Id":11, "Denumire":"EUROLIFE FFH ASIGURARI DE VIATA S.A. (FOSTA EUROLIFE ERB ASIGURARI DE VIATA S.A.)", "RCA":false, "Adresa":"Str. Vasile Lascar nr. 31, cladirea Vasile Lascar 31 Business Center, etajele 10 si 11  , Bucuresti, Sector 2"},
      {"Id":12, "Denumire":"EUROLIFE FFH ASIGURARI GENERALE S.A. (FOSTA EUROLIFE ERB ASIGURARI GENERALE S.A.)", "RCA":false, "Adresa":"Str. Vasile Lascar nr. 31, cladirea Vasile Lascar 31 Business Center, etajele 10 si 11  , Bucuresti, Sector 2"},
      {"Id":13, "Denumire":"GARANTA  ASIGURARI S.A.", "RCA":true, "Adresa":"B-dul Ion Mihalache nr. 19-21, Bucuresti, Sector 1"},
      {"Id":14, "Denumire":"GENERALI ROMANIA ASIGURARE REASIGURARE S.A. (FOSTA ASIGURARE REASIGURARE ARDAF S.A.)", "RCA":true, "Adresa":"Piata Charles de Gaulle nr. 15, etajele 6 si 7, Bucuresti, Sector 1"},
      {"Id":15, "Denumire":"GERMAN ROMANIAN ASSURANCE S.A.", "RCA":false, "Adresa":"str. Emil Garleanu nr. 11, bl. A8, sc. 2, et. 5, ap. 49, Bucuresti, Sector 3"},
      {"Id":16, "Denumire":"GOTHAER ASIGURARI - REASIGURARI S.A. (FOSTA PLATINUM ASIGURARI REASIGURARI S.A.)", "RCA":false, "Adresa":"Sos. Pipera nr. 42, et. 16, et. 1 - cam. 1, Bucuresti, Sector 2"},
      {"Id":17, "Denumire":"GRAWE ROMANIA ASIGURARE S.A.", "RCA":false, "Adresa":"Str. Vulturilor nr. 98A, parter, et.1, 2, 3 si 8, Bucuresti, Sector 3"},
      {"Id":18, "Denumire":"GROUPAMA ASIGURARI S.A.", "RCA":true, "Adresa":"Str. Mihai Eminescu nr. 45, Bucuresti, Sector 1"},
      {"Id":19, "Denumire":"NN ASIGURARI DE VIATA S.A. (FOSTA ING ASIGURARI DE VIATA S.A.)", "RCA":false, "Adresa":"str. Costache Negri nr. 1- 5, Bucuresti, Sector 5"},
      {"Id":20, "Denumire":"NN ASIGURARI S.A.", "RCA":false, "Adresa":"Str. Costache Negri nr. 1-5, et. 1, Bucuresti, Sector 5"},
      {"Id":21, "Denumire":"OMNIASIG VIENNA INSURANCE GROUP S.A. (FOSTA BCR ASIGURARI VIENNA INSURANCE GROUP S.A.)", "RCA":true, "Adresa":"Aleea Alexandru nr. 51, Bucuresti, Sector 1"},
      {"Id":22, "Denumire":"ONIX ASIGURARI S.A. (FOSTA OTP GARANCIA ASIGURARI S.A.)", "RCA":false, "Adresa":"Str. Daniel Danielopolu nr.2, etaj 3, Bucuresti, Sector 1"},
      {"Id":23, "Denumire":"POOL-UL DE ASIGURARE IMPOTRIVA DEZASTRELOR NATURALE S.A. (PAID)", "RCA":false, "Adresa":"B-dul Nicolae Titulescu nr. 4-8, et. 3, Aripa Est a Cladirii America House (E_03_02), Bucuresti, Sector 1"},
      {"Id":24, "Denumire":"SIGNAL IDUNA ASIGURARE REASIGURARE S.A. (ANTERIOR SIGNAL IDUNA ASIGURARI DE VIATA S.A.)", "RCA":false, "Adresa":"Str. Gara Herastrau nr. 2, etaj 4 sectiunea 1, cod postal 020334, Bucuresti, Sector 2"},
      {"Id":25, "Denumire":"SOCIETATEA DE ASIGURARE - REASIGURARE CITY INSURANCE S.A.", "RCA":true, "Adresa":"Str. Emanoil Porumbaru nr.93-95, parter, etajele 1,2,4 si 5, Bucuresti, Sector 1"},
      {"Id":26, "Denumire":"UNIQA ASIGURARI DE VIATA S.A.", "RCA":false, "Adresa":"str. Nicolae Caramfil nr. 25, etaj 5, Bucuresti, Sector 1"},
      {"Id":27, "Denumire":"UNIQA ASIGURARI S.A.", "RCA":true, "Adresa":"str. Nicolae Caramfil nr. 25, parter, et. 2-4, Bucuresti, Sector 1"},
      {"Id":28, "Denumire":"Watford Insurance Company", "RCA":true, "Adresa":"Blv. Ion Ionescu de la Brad nr. 1A, Baneasa Airport Tower Etaj II, Sector 1, Cod Postal 013811, Bucuresti, Romania"}
    ];
  }
}

export class TaraCarteVerde{
  Id: number;
  Denumire: string;
  Cod: string;
  constructor(){
    this.Id = null;
    this.Denumire = null;
    this.Cod = null;
  }
}
export class TariCarteVerde{
  Tari: TaraCarteVerde[];
  constructor(){
    this.Tari=[{"Id":1, "Denumire":"ALBANIA", "Cod":"AL - Albania"}, 
    {"Id":2, "Denumire":"ANDORRA", "Cod":"AND - Andorra"}, 
    {"Id":3, "Denumire":"AUSTRIA", "Cod":"A - Austria"}, 
    {"Id":4, "Denumire":"AZERBAIJAN", "Cod":"AZ - Azerbaijan"}, 
    {"Id":5, "Denumire":"BELARUS", "Cod":"BY - Belarus"}, 
    {"Id":6, "Denumire":"BELGIA", "Cod":"B - Belgium"}, 
    {"Id":7, "Denumire":"BOSNIA SI HERZEGOVINA", "Cod":"BIH - Bosnia and Herzegovina"}, 
    {"Id":8, "Denumire":"BULGARIA", "Cod":"BG - Bulgaria"}, 
    {"Id":9, "Denumire":"CIPRU", "Cod":"CY - Cyprus"}, 
    {"Id":10, "Denumire":"CROAȚIA", "Cod":"HR - Croatia"}, 
    {"Id":11, "Denumire":"DANEMARCA", "Cod":"DK - Denmark"}, 
    {"Id":12, "Denumire":"ELVEȚIA", "Cod":"CH - Switzerland"}, 
    {"Id":13, "Denumire":"ESTONIA", "Cod":"EST - Estonia"}, 
    {"Id":14, "Denumire":"FINLANDA", "Cod":"FIN - Finland"}, 
    {"Id":15, "Denumire":"FRANȚA", "Cod":"F - France"}, 
    {"Id":16, "Denumire":"GERMANIA", "Cod":"D - Germany"}, 
    {"Id":17, "Denumire":"GRECIA", "Cod":"GR - Greece"}, 
    {"Id":18, "Denumire":"IRAN", "Cod":"IR - Iran, Islamic Republic of"}, 
    {"Id":19, "Denumire":"IRLANDA", "Cod":"IRL - Ireland"}, 
    {"Id":20, "Denumire":"ISLANDA", "Cod":"IS - Iceland"}, 
    {"Id":21, "Denumire":"ISRAEL", "Cod":"IL - Israel"}, 
    {"Id":22, "Denumire":"ITALIA", "Cod":"I - Italy"}, 
    {"Id":23, "Denumire":"LETONIA", "Cod":"LV - Latvia"}, 
    {"Id":24, "Denumire":"LIECHTENSTEIN", "Cod":"FL - Liechtenstein"}, 
    {"Id":25, "Denumire":"LITUANIA", "Cod":"LT - Lithuania"}, 
    {"Id":26, "Denumire":"LUXEMBURG", "Cod":"L - Luxembourg"}, 
    {"Id":27, "Denumire":"MACEDONIA DE NORD", "Cod":"MK - North Macedonia"}, 
    {"Id":28, "Denumire":"MALTA", "Cod":"M - Malta"}, 
    {"Id":29, "Denumire":"MAROC", "Cod":"MA - Morocco"}, 
    {"Id":30, "Denumire":"MOLDOVA", "Cod":"MD - Moldova"}, 
    {"Id":31, "Denumire":"MUNTENEGRU", "Cod":"MNE - Montenegro"}, 
    {"Id":32, "Denumire":"NORVEGIA", "Cod":"N - Norway"}, 
    {"Id":33, "Denumire":"OLANDA", "Cod":"NL - Netherlands"}, 
    {"Id":34, "Denumire":"POLONIA", "Cod":"PL - Poland"}, 
    {"Id":35, "Denumire":"PORTUGALiA", "Cod":"P - Portugal"}, 
    {"Id":36, "Denumire":"REGATUL UNIT", "Cod":"GB - United Kingdom"}, 
    {"Id":37, "Denumire":"REPUBLICA  CEHĂ", "Cod":"CZ - Czech Republic"}, 
    {"Id":38, "Denumire":"REPUBLICA SLOVACĂ", "Cod":"SK - Slovak Republic"}, 
    {"Id":39, "Denumire":"ROMANIA", "Cod":"RO - Romania"}, 
    {"Id":40, "Denumire":"RUSIA", "Cod":"RUS - Russia"}, 
    {"Id":41, "Denumire":"SERBIA", "Cod":"SRB - Serbia"}, 
    {"Id":42, "Denumire":"SLOVENIA", "Cod":"SLO - Slovenia"}, 
    {"Id":43, "Denumire":"SPANIA", "Cod":"E - Spain"}, 
    {"Id":44, "Denumire":"SUEDIA", "Cod":"S - Sweden"}, 
    {"Id":45, "Denumire":"TUNISIA", "Cod":"TN - Tunisia"}, 
    {"Id":46, "Denumire":"TURCIA", "Cod":"TR - Turkey"}, 
    {"Id":47, "Denumire":"UCRAINA", "Cod":"UA - Ukraine"}, 
    {"Id":48, "Denumire":"UNGARIA", "Cod":"H - Hungary"}];
  }
}

export class MarciAuto{
  MarciAuto: MarcaAuto[];
  constructor(){
    this.MarciAuto=[{"Id":1, "Model":"1867 Henry Seth Taylor Steam Buggy"},
      {"Id":2, "Model":"1893 Shamrock"},
      {"Id":3, "Model":"67X"},
      {"Id":4, "Model":"AAD"},
      {"Id":5, "Model":"Abadal"},
      {"Id":6, "Model":"Abarth"},
      {"Id":7, "Model":"ABC"},
      {"Id":8, "Model":"Aberdonia"},
      {"Id":9, "Model":"AC Cars"},
      {"Id":10, "Model":"AC Propulsion"},
      {"Id":11, "Model":"Acadian"},
      {"Id":12, "Model":"Acura"},
      {"Id":13, "Model":"Adam Motor Company, Ltd."},
      {"Id":14, "Model":"Adams"},
      {"Id":15, "Model":"ADK"},
      {"Id":16, "Model":"Adler"},
      {"Id":17, "Model":"Aero"},
      {"Id":18, "Model":"Aeromobil"},
      {"Id":19, "Model":"Agrale"},
      {"Id":20, "Model":"AIL"},
      {"Id":21, "Model":"Aixam-Mega"},
      {"Id":22, "Model":"Ajax"},
      {"Id":23, "Model":"Ajax"},
      {"Id":24, "Model":"AJS"},
      {"Id":25, "Model":"Al Araba Company"},
      {"Id":26, "Model":"Alatac"},
      {"Id":27, "Model":"Albion"},
      {"Id":28, "Model":"Ales"},
      {"Id":29, "Model":"Alesbury"},
      {"Id":30, "Model":"Alfa Romeo Automobiles"},
      {"Id":31, "Model":"Alfgang"},
      {"Id":32, "Model":"Allard"},
      {"Id":33, "Model":"Alldays"},
      {"Id":34, "Model":"Alma"},
      {"Id":35, "Model":"Almac"},
      {"Id":36, "Model":"ALP"},
      {"Id":37, "Model":"Alpha Sports"},
      {"Id":38, "Model":"Alpine"},
      {"Id":39, "Model":"Alta"},
      {"Id":40, "Model":"Alta"},
      {"Id":41, "Model":"Alteliers Germain"},
      {"Id":42, "Model":"Alternative Cars Limited"},
      {"Id":43, "Model":"Alvis"},
      {"Id":44, "Model":"AM General"},
      {"Id":45, "Model":"Ambassador"},
      {"Id":46, "Model":"AMC"},
      {"Id":47, "Model":"AMCE"},
      {"Id":48, "Model":"American"},
      {"Id":49, "Model":"American Underslung"},
      {"Id":50, "Model":"AMG"},
      {"Id":51, "Model":"Amherst"},
      {"Id":52, "Model":"Amilcar"},
      {"Id":53, "Model":"Amphicar"},
      {"Id":54, "Model":"Amuza"},
      {"Id":55, "Model":"Anadol"},
      {"Id":56, "Model":"Anasagasti"},
      {"Id":57, "Model":"Andino"},
      {"Id":58, "Model":"Andre"},
      {"Id":59, "Model":"Ansaldo"},
      {"Id":60, "Model":"Anteros Coachworks"},
      {"Id":61, "Model":"Antoine"},
      {"Id":62, "Model":"Anziel Nova"},
      {"Id":63, "Model":"Apal"},
      {"Id":64, "Model":"Apal"},
      {"Id":65, "Model":"Apollo"},
      {"Id":66, "Model":"Apperson"},
      {"Id":67, "Model":"AR aka ARCO"},
      {"Id":68, "Model":"Arab"},
      {"Id":69, "Model":"Arab American Vehicles"},
      {"Id":70, "Model":"Arash"},
      {"Id":71, "Model":"Argyll"},
      {"Id":72, "Model":"Ariel"},
      {"Id":73, "Model":"Arista"},
      {"Id":74, "Model":"Armstrong Siddeley"},
      {"Id":75, "Model":"Arnolt"},
      {"Id":76, "Model":"ARO"},
      {"Id":77, "Model":"Arola SARL"},
      {"Id":78, "Model":"Arrinera"},
      {"Id":79, "Model":"Arrol-Johnston"},
      {"Id":80, "Model":"Artega"},
      {"Id":81, "Model":"Artega Automobil GmbH"},
      {"Id":82, "Model":"ASA"},
      {"Id":83, "Model":"Asahi"},
      {"Id":84, "Model":"Ascari Cars Ltd."},
      {"Id":85, "Model":"ASL"},
      {"Id":86, "Model":"Aspa"},
      {"Id":87, "Model":"Aspidis"},
      {"Id":88, "Model":"Aster"},
      {"Id":89, "Model":"Aston Martin"},
      {"Id":90, "Model":"Astra"},
      {"Id":91, "Model":"Astra"},
      {"Id":92, "Model":"Asuna"},
      {"Id":93, "Model":"Aton Impulse"},
      {"Id":94, "Model":"ATS"},
      {"Id":95, "Model":"Attica"},
      {"Id":96, "Model":"Auburn"},
      {"Id":97, "Model":"Audi"},
      {"Id":98, "Model":"Aurica Motors"},
      {"Id":99, "Model":"Austin"},
      {"Id":100, "Model":"Australian Motor Industries"},
      {"Id":101, "Model":"Australian Six"},
      {"Id":102, "Model":"Authi"},
      {"Id":103, "Model":"Auto-Union"},
      {"Id":104, "Model":"Autobianchi"},
      {"Id":105, "Model":"Autobleu"},
      {"Id":106, "Model":"Autocars Co. Ltd."},
      {"Id":107, "Model":"Autokinitoviomihania Ellados"},
      {"Id":108, "Model":"Automeccanica"},
      {"Id":109, "Model":"Autovia"},
      {"Id":110, "Model":"Auverland"},
      {"Id":111, "Model":"Avanti"},
      {"Id":112, "Model":"Avia"},
      {"Id":113, "Model":"AvtoVAZ"},
      {"Id":114, "Model":"AvtoZAZ"},
      {"Id":115, "Model":"AWZ-Zwickau"},
      {"Id":116, "Model":"AZLK"},
      {"Id":117, "Model":"B Engineering"},
      {"Id":118, "Model":"B+B"},
      {"Id":119, "Model":"BAC"},
      {"Id":120, "Model":"Balaton"},
      {"Id":121, "Model":"Ballot"},
      {"Id":122, "Model":"Bandini Automobili"},
      {"Id":123, "Model":"Basil Green Motors"},
      {"Id":124, "Model":"Batten"},
      {"Id":125, "Model":"Bavarian Auto Group"},
      {"Id":126, "Model":"BAW"},
      {"Id":127, "Model":"Beattie"},
      {"Id":128, "Model":"Beiqi"},
      {"Id":129, "Model":"Belga Rise"},
      {"Id":130, "Model":"Belkommunmash"},
      {"Id":131, "Model":"Belsize"},
      {"Id":132, "Model":"Bentley"},
      {"Id":133, "Model":"Berkeley"},
      {"Id":134, "Model":"Bernardini"},
      {"Id":135, "Model":"Bertone"},
      {"Id":136, "Model":"Biotechnia Ellinikon Trikyklon"},
      {"Id":137, "Model":"Birchfield Motor Company"},
      {"Id":138, "Model":"Birkin"},
      {"Id":139, "Model":"Birrana"},
      {"Id":140, "Model":"Bitter"},
      {"Id":141, "Model":"Bizzarrini"},
      {"Id":142, "Model":"Bjering"},
      {"Id":143, "Model":"BMW"},
      {"Id":144, "Model":"BollÃ©e"},
      {"Id":145, "Model":"BollorÃ©"},
      {"Id":146, "Model":"Bolwell"},
      {"Id":147, "Model":"Bond"},
      {"Id":148, "Model":"Borgward"},
      {"Id":149, "Model":"Bosmal"},
      {"Id":150, "Model":"Bourassa"},
      {"Id":151, "Model":"Brasinca"},
      {"Id":152, "Model":"Brems"},
      {"Id":153, "Model":"Brennabor-Werke"},
      {"Id":154, "Model":"Brewster"},
      {"Id":155, "Model":"Bricklin SV-1"},
      {"Id":156, "Model":"Brilliance Auto Group"},
      {"Id":157, "Model":"Brisco"},
      {"Id":158, "Model":"Bristol"},
      {"Id":159, "Model":"British Salmson"},
      {"Id":160, "Model":"Brock Motors"},
      {"Id":161, "Model":"Brooke"},
      {"Id":162, "Model":"Brooks Steam Motors"},
      {"Id":163, "Model":"Brough Superior"},
      {"Id":164, "Model":"Brush"},
      {"Id":165, "Model":"BrÃ¼tsch"},
      {"Id":166, "Model":"BSA"},
      {"Id":167, "Model":"Bucciali"},
      {"Id":168, "Model":"Buckle Motors"},
      {"Id":169, "Model":"Buckler"},
      {"Id":170, "Model":"Buddy"},
      {"Id":171, "Model":"Bufori"},
      {"Id":172, "Model":"Bugatti"},
      {"Id":173, "Model":"Buick, formally the Buick Motor Division"},
      {"Id":174, "Model":"Bukh & Gry"},
      {"Id":175, "Model":"Bulant"},
      {"Id":176, "Model":"Bulgaralpine"},
      {"Id":177, "Model":"Bullet"},
      {"Id":178, "Model":"Burton"},
      {"Id":179, "Model":"BUS"},
      {"Id":180, "Model":"BXR"},
      {"Id":181, "Model":"BYD"},
      {"Id":182, "Model":"Cadillac"},
      {"Id":183, "Model":"Calthorpe"},
      {"Id":184, "Model":"Cambli International Thunder 1"},
      {"Id":185, "Model":"Campagna Corporation"},
      {"Id":186, "Model":"Canadian Motor"},
      {"Id":187, "Model":"Caparo"},
      {"Id":188, "Model":"Carroll Shelby"},
      {"Id":189, "Model":"Casalini"},
      {"Id":190, "Model":"Case"},
      {"Id":191, "Model":"Castagna"},
      {"Id":192, "Model":"Caterham"},
      {"Id":193, "Model":"Centenari"},
      {"Id":194, "Model":"Central Motor Co., Ltd"},
      {"Id":195, "Model":"CG"},
      {"Id":196, "Model":"Chadwick"},
      {"Id":197, "Model":"Champion"},
      {"Id":198, "Model":"Chandler"},
      {"Id":199, "Model":"Changâ€™an Automobile Group"},
      {"Id":200, "Model":"Changhe"},
      {"Id":201, "Model":"Chariot Motors"},
      {"Id":202, "Model":"Checker"},
      {"Id":203, "Model":"Cheetah Racing"},
      {"Id":204, "Model":"Chenard-Walcker"},
      {"Id":205, "Model":"Chery Automobile Co"},
      {"Id":206, "Model":"Chevrolet"},
      {"Id":207, "Model":"Chevron Engineering Specialties"},
      {"Id":208, "Model":"Chinkara Motors"},
      {"Id":209, "Model":"Chiribiri"},
      {"Id":210, "Model":"Chrysler"},
      {"Id":211, "Model":"Chrysler "},
      {"Id":212, "Model":"Cisitalia"},
      {"Id":213, "Model":"CitroÃ«n"},
      {"Id":214, "Model":"CityEl"},
      {"Id":215, "Model":"Cizeta"},
      {"Id":216, "Model":"Clan"},
      {"Id":217, "Model":"Claveau"},
      {"Id":218, "Model":"Clinton"},
      {"Id":219, "Model":"CMC"},
      {"Id":220, "Model":"Colonial Motors Ltd"},
      {"Id":221, "Model":"Comet"},
      {"Id":222, "Model":"Commuter"},
      {"Id":223, "Model":"Compagnie Nationale Excelsior"},
      {"Id":224, "Model":"Connaught"},
      {"Id":225, "Model":"Continental"},
      {"Id":226, "Model":"Cooper"},
      {"Id":227, "Model":"Cord"},
      {"Id":228, "Model":"Costin"},
      {"Id":229, "Model":"Cottin-Desgouttes"},
      {"Id":230, "Model":"Covini Engineering"},
      {"Id":231, "Model":"Crossley"},
      {"Id":232, "Model":"CSC"},
      {"Id":233, "Model":"Csonka"},
      {"Id":234, "Model":"CT&T United"},
      {"Id":235, "Model":"Cunningham"},
      {"Id":236, "Model":"Custoca"},
      {"Id":237, "Model":"Dacia"},
      {"Id":238, "Model":"Dacon"},
      {"Id":239, "Model":"Dadi Auto"},
      {"Id":240, "Model":"Daewoo Motors"},
      {"Id":241, "Model":"DAF"},
      {"Id":242, "Model":"Dagmar"},
      {"Id":243, "Model":"Daihatsu"},
      {"Id":244, "Model":"Daimler"},
      {"Id":245, "Model":"Daimler"},
      {"Id":246, "Model":"Dakar"},
      {"Id":247, "Model":"Darracq"},
      {"Id":248, "Model":"Darracq Lago"},
      {"Id":249, "Model":"Dartz Motorz Company"},
      {"Id":250, "Model":"Datsun"},
      {"Id":251, "Model":"Dauer"},
      {"Id":252, "Model":"David Brown Automotive"},
      {"Id":253, "Model":"Davis"},
      {"Id":254, "Model":"Davrian"},
      {"Id":255, "Model":"Daytona Motors"},
      {"Id":256, "Model":"DB"},
      {"Id":257, "Model":"De Dietrich"},
      {"Id":258, "Model":"De Dion Bouton"},
      {"Id":259, "Model":"De Lorean"},
      {"Id":260, "Model":"De Soto"},
      {"Id":261, "Model":"De Tomaso"},
      {"Id":262, "Model":"De Wandre"},
      {"Id":263, "Model":"Deep Sanderson"},
      {"Id":264, "Model":"DeLaChapelle"},
      {"Id":265, "Model":"Delage"},
      {"Id":266, "Model":"Delahaye"},
      {"Id":267, "Model":"Delecroix"},
      {"Id":268, "Model":"Dellow"},
      {"Id":269, "Model":"Denzel"},
      {"Id":270, "Model":"Derby"},
      {"Id":271, "Model":"Derways"},
      {"Id":272, "Model":"Detroit Electric"},
      {"Id":273, "Model":"Devaux Pty Ltd"},
      {"Id":274, "Model":"Devon Motorworks"},
      {"Id":275, "Model":"Devrim"},
      {"Id":276, "Model":"Diana"},
      {"Id":277, "Model":"Diar"},
      {"Id":278, "Model":"Diardi"},
      {"Id":279, "Model":"DIM Motor Company"},
      {"Id":280, "Model":"Dinap"},
      {"Id":281, "Model":"Diva"},
      {"Id":282, "Model":"Dixi"},
      {"Id":283, "Model":"DKW"},
      {"Id":284, "Model":"DKW-Vemag"},
      {"Id":285, "Model":"DMC"},
      {"Id":286, "Model":"Dodge"},
      {"Id":287, "Model":"Dome"},
      {"Id":288, "Model":"Dominion"},
      {"Id":289, "Model":"Dongfeng Motor Corporation"},
      {"Id":290, "Model":"Donkervoort Automobielen BV"},
      {"Id":291, "Model":"Dort"},
      {"Id":292, "Model":"DR Motor Company"},
      {"Id":293, "Model":"Dragon"},
      {"Id":294, "Model":"DRB"},
      {"Id":295, "Model":"Du Pont"},
      {"Id":296, "Model":"Duesen Bayern"},
      {"Id":297, "Model":"Duesenberg"},
      {"Id":298, "Model":"Dufaux"},
      {"Id":299, "Model":"Duplex"},
      {"Id":300, "Model":"Durant"},
      {"Id":301, "Model":"DÃ¼rkopp"},
      {"Id":302, "Model":"Duryea"},
      {"Id":303, "Model":"Dutton"},
      {"Id":304, "Model":"Dynasty Electric"},
      {"Id":305, "Model":"Eagle"},
      {"Id":306, "Model":"Ecosse"},
      {"Id":307, "Model":"Edfor"},
      {"Id":308, "Model":"Edran"},
      {"Id":309, "Model":"Edsel"},
      {"Id":310, "Model":"EGA"},
      {"Id":311, "Model":"Egy-Tech Engineering"},
      {"Id":312, "Model":"Elcar"},
      {"Id":313, "Model":"Elcat Automotive"},
      {"Id":314, "Model":"Elfin"},
      {"Id":315, "Model":"Elva"},
      {"Id":316, "Model":"ELVO"},
      {"Id":317, "Model":"EMF"},
      {"Id":318, "Model":"Emme"},
      {"Id":319, "Model":"Emporiki Autokiniton"},
      {"Id":320, "Model":"Engesa"},
      {"Id":321, "Model":"Enterra Vipre"},
      {"Id":322, "Model":"Enzmann 506"},
      {"Id":323, "Model":"ErAZ"},
      {"Id":324, "Model":"Eshelman"},
      {"Id":325, "Model":"Espenlaub"},
      {"Id":326, "Model":"Esther"},
      {"Id":327, "Model":"Eterniti Motors"},
      {"Id":328, "Model":"Etox"},
      {"Id":329, "Model":"Eurostar Automobilwerk GesmbH & Co. KG"},
      {"Id":330, "Model":"Everus (Li Nian)"},
      {"Id":331, "Model":"Exagon Engineering"},
      {"Id":332, "Model":"Excel Motors Limited"},
      {"Id":333, "Model":"Exelsior"},
      {"Id":334, "Model":"FÃ¡brica Nacional de Motores"},
      {"Id":335, "Model":"Fabrique Nationale"},
      {"Id":336, "Model":"Facel Vega"},
      {"Id":337, "Model":"Fafnir"},
      {"Id":338, "Model":"Fageol"},
      {"Id":339, "Model":"Fairthorpe"},
      {"Id":340, "Model":"Falcon Motorsports"},
      {"Id":341, "Model":"Faralli and Mazzanti"},
      {"Id":342, "Model":"Farbio"},
      {"Id":343, "Model":"Farboud"},
      {"Id":344, "Model":"FAW Group Corporation"},
      {"Id":345, "Model":"FAW Tianjin"},
      {"Id":346, "Model":"FBS"},
      {"Id":347, "Model":"Fejes"},
      {"Id":348, "Model":"Felber Autoroller"},
      {"Id":349, "Model":"Ferrari"},
      {"Id":350, "Model":"Fiat"},
      {"Id":351, "Model":"Finlandia"},
      {"Id":352, "Model":"Fioravanti"},
      {"Id":353, "Model":"Firestone-Columbus"},
      {"Id":354, "Model":"Fisker Automotive, Inc"},
      {"Id":355, "Model":"Fitch"},
      {"Id":356, "Model":"Fleetwood-Knight"},
      {"Id":357, "Model":"Flint"},
      {"Id":358, "Model":"Force Motors"},
      {"Id":359, "Model":"Ford"},
      {"Id":360, "Model":"Ford Motor Company "},
      {"Id":361, "Model":"Fornasari"},
      {"Id":362, "Model":"Foton Motor"},
      {"Id":363, "Model":"Franklin"},
      {"Id":364, "Model":"Fraser Clubman"},
      {"Id":365, "Model":"Frisky"},
      {"Id":366, "Model":"FSC Lublin"},
      {"Id":367, "Model":"FSO"},
      {"Id":368, "Model":"Fuldamobil"},
      {"Id":369, "Model":"FYK"},
      {"Id":370, "Model":"GAC Changfeng Motor"},
      {"Id":371, "Model":"GAC Group"},
      {"Id":372, "Model":"GAIG"},
      {"Id":373, "Model":"Gardner"},
      {"Id":374, "Model":"Gareau"},
      {"Id":375, "Model":"Gaselle"},
      {"Id":376, "Model":"GAZor"},
      {"Id":377, "Model":"Geely"},
      {"Id":378, "Model":"Geijer & Co"},
      {"Id":379, "Model":"GEM"},
      {"Id":380, "Model":"General Motors "},
      {"Id":381, "Model":"Geo"},
      {"Id":382, "Model":"Ghabbour Group"},
      {"Id":383, "Model":"Ghia"},
      {"Id":384, "Model":"Giad Auto"},
      {"Id":385, "Model":"Gilbern"},
      {"Id":386, "Model":"Gillet"},
      {"Id":387, "Model":"Ginetta"},
      {"Id":388, "Model":"Giocattolo Motori"},
      {"Id":389, "Model":"Giottiline"},
      {"Id":390, "Model":"GKD"},
      {"Id":391, "Model":"GKN"},
      {"Id":392, "Model":"Glas"},
      {"Id":393, "Model":"GM"},
      {"Id":394, "Model":"GMC"},
      {"Id":395, "Model":"GN"},
      {"Id":396, "Model":"Gnome"},
      {"Id":397, "Model":"Goggomobil"},
      {"Id":398, "Model":"Goliath"},
      {"Id":399, "Model":"Gonow"},
      {"Id":400, "Model":"Gordon-Keeble"},
      {"Id":401, "Model":"GrÃ¤f & Stift"},
      {"Id":402, "Model":"Graham"},
      {"Id":403, "Model":"Grant"},
      {"Id":404, "Model":"Gray"},
      {"Id":405, "Model":"Gray-Dort Motors"},
      {"Id":406, "Model":"Great Wall Motors Company Limited"},
      {"Id":407, "Model":"Gregoire"},
      {"Id":408, "Model":"Grieve"},
      {"Id":409, "Model":"Griffith"},
      {"Id":410, "Model":"Grinnall"},
      {"Id":411, "Model":"Grofri"},
      {"Id":412, "Model":"Grupo Industrial Ramirez"},
      {"Id":413, "Model":"GSM"},
      {"Id":414, "Model":"GTA Motor"},
      {"Id":415, "Model":"Gumpert"},
      {"Id":416, "Model":"Gurgel Motores"},
      {"Id":417, "Model":"Gutbrod"},
      {"Id":418, "Model":"Guy"},
      {"Id":419, "Model":"Habib Motors"},
      {"Id":420, "Model":"Hafei"},
      {"Id":421, "Model":"HAIMA"},
      {"Id":422, "Model":"HAL"},
      {"Id":423, "Model":"Hammer"},
      {"Id":424, "Model":"Hanomag"},
      {"Id":425, "Model":"Hawtai"},
      {"Id":426, "Model":"Healey"},
      {"Id":427, "Model":"Heinkel"},
      {"Id":428, "Model":"Heinkel Kabine"},
      {"Id":429, "Model":"Heng"},
      {"Id":430, "Model":"Hennessey"},
      {"Id":431, "Model":"Heron"},
      {"Id":432, "Model":"Hertz"},
      {"Id":433, "Model":"Heuliez"},
      {"Id":434, "Model":"Highland"},
      {"Id":435, "Model":"Hillman"},
      {"Id":436, "Model":"Hindustan Motors"},
      {"Id":437, "Model":"Hino"},
      {"Id":438, "Model":"Hispano Argentina"},
      {"Id":439, "Model":"Hofstetter Turbo"},
      {"Id":440, "Model":"Holden"},
      {"Id":441, "Model":"Holland Car PLC"},
      {"Id":442, "Model":"Honda"},
      {"Id":443, "Model":"Honda Motor Company "},
      {"Id":444, "Model":"Hongqi"},
      {"Id":445, "Model":"Hope Motor Company"},
      {"Id":446, "Model":"Horch"},
      {"Id":447, "Model":"Hotchkiss"},
      {"Id":448, "Model":"HRG"},
      {"Id":449, "Model":"HSV"},
      {"Id":450, "Model":"HTT PlÃ©thore"},
      {"Id":451, "Model":"Huali"},
      {"Id":452, "Model":"Huayang"},
      {"Id":453, "Model":"Hudson"},
      {"Id":454, "Model":"Humber"},
      {"Id":455, "Model":"Hurtan Desarrollos S.L."},
      {"Id":456, "Model":"Hurtu"},
      {"Id":457, "Model":"IAME"},
      {"Id":458, "Model":"IDA-Opel"},
      {"Id":459, "Model":"IFR Aspid"},
      {"Id":460, "Model":"IHI Corporation"},
      {"Id":461, "Model":"IKA"},
      {"Id":462, "Model":"IKCO"},
      {"Id":463, "Model":"Ilinga"},
      {"Id":464, "Model":"Imperia Automobiles"},
      {"Id":465, "Model":"Imperial"},
      {"Id":466, "Model":"Infiniti"},
      {"Id":467, "Model":"Innocenti"},
      {"Id":468, "Model":"Intermeccanica"},
      {"Id":469, "Model":"Intermeccanica"},
      {"Id":470, "Model":"Invicta"},
      {"Id":471, "Model":"Iota"},
      {"Id":472, "Model":"IPML"},
      {"Id":473, "Model":"Irmscher"},
      {"Id":474, "Model":"Isatis"},
      {"Id":475, "Model":"Isdera"},
      {"Id":476, "Model":"Iso"},
      {"Id":477, "Model":"Isotta-Fraschini"},
      {"Id":478, "Model":"Isuzu"},
      {"Id":479, "Model":"Itala"},
      {"Id":480, "Model":"Italdesign"},
      {"Id":481, "Model":"IZh"},
      {"Id":482, "Model":"JAC Motors"},
      {"Id":483, "Model":"Jaguar"},
      {"Id":484, "Model":"JAWA"},
      {"Id":485, "Model":"JBA Motors"},
      {"Id":486, "Model":"Jeecy-Vea"},
      {"Id":487, "Model":"Jeep"},
      {"Id":488, "Model":"Jensen Motors"},
      {"Id":489, "Model":"Jiangling Motors Corporation"},
      {"Id":490, "Model":"Jiotto"},
      {"Id":491, "Model":"Jordan"},
      {"Id":492, "Model":"JOSS"},
      {"Id":493, "Model":"JÃ¶sse"},
      {"Id":494, "Model":"Jowett"},
      {"Id":495, "Model":"JPX do Brasil Ltda."},
      {"Id":496, "Model":"Juwel"},
      {"Id":497, "Model":"Kaditcha"},
      {"Id":498, "Model":"Kaipan"},
      {"Id":499, "Model":"Kaiser"},
      {"Id":500, "Model":"Kantanka"},
      {"Id":501, "Model":"Karmann"},
      {"Id":502, "Model":"Karosa"},
      {"Id":503, "Model":"Keller"},
      {"Id":504, "Model":"Kewet"},
      {"Id":505, "Model":"Kia Motors Corporation"},
      {"Id":506, "Model":"Kieft"},
      {"Id":507, "Model":"Kish Khodro"},
      {"Id":508, "Model":"Kissel"},
      {"Id":509, "Model":"Kleinschnittger"},
      {"Id":510, "Model":"Knox"},
      {"Id":511, "Model":"Koenig"},
      {"Id":512, "Model":"Koenigsegg"},
      {"Id":513, "Model":"Korvensuu"},
      {"Id":514, "Model":"La Buire"},
      {"Id":515, "Model":"La Fayette"},
      {"Id":516, "Model":"La Salle"},
      {"Id":517, "Model":"Lada"},
      {"Id":518, "Model":"Lagonda"},
      {"Id":519, "Model":"Lamborghini"},
      {"Id":520, "Model":"Lammas-Graham"},
      {"Id":521, "Model":"Lanchester"},
      {"Id":522, "Model":"Lancia"},
      {"Id":523, "Model":"Land Rover"},
      {"Id":524, "Model":"LandFighter"},
      {"Id":525, "Model":"Laurin and Klement"},
      {"Id":526, "Model":"LDS"},
      {"Id":527, "Model":"Le Zebre"},
      {"Id":528, "Model":"Lea-Francis"},
      {"Id":529, "Model":"Leader"},
      {"Id":530, "Model":"Leblanc"},
      {"Id":531, "Model":"Ledl"},
      {"Id":532, "Model":"Leidart"},
      {"Id":533, "Model":"LÃ©on BollÃ©e"},
      {"Id":534, "Model":"LeRoy"},
      {"Id":535, "Model":"Lexington"},
      {"Id":536, "Model":"Lexus"},
      {"Id":537, "Model":"Lexus"},
      {"Id":538, "Model":"LIAZ"},
      {"Id":539, "Model":"Libelle"},
      {"Id":540, "Model":"Libyan Rocket"},
      {"Id":541, "Model":"Licorne"},
      {"Id":542, "Model":"Lida Buses Neman"},
      {"Id":543, "Model":"Lifan"},
      {"Id":544, "Model":"Lifan Ethiopia"},
      {"Id":545, "Model":"Lightning"},
      {"Id":546, "Model":"Ligier"},
      {"Id":547, "Model":"Lincoln"},
      {"Id":548, "Model":"Lister"},
      {"Id":549, "Model":"Litex Motors"},
      {"Id":550, "Model":"Lloyd"},
      {"Id":551, "Model":"LMX"},
      {"Id":552, "Model":"Lobini"},
      {"Id":553, "Model":"Locomobile"},
      {"Id":554, "Model":"Lola"},
      {"Id":555, "Model":"Lombard"},
      {"Id":556, "Model":"London Motors"},
      {"Id":557, "Model":"Lorraine"},
      {"Id":558, "Model":"Lorraine Dietrich"},
      {"Id":559, "Model":"Lotec"},
      {"Id":560, "Model":"Lotus"},
      {"Id":561, "Model":"Lozier"},
      {"Id":562, "Model":"LTI"},
      {"Id":563, "Model":"LuAZ"},
      {"Id":564, "Model":"Lucalia Clubman"},
      {"Id":565, "Model":"Lutzmann"},
      {"Id":566, "Model":"Luxgen Motor Co., Ltd."},
      {"Id":567, "Model":"Magna Steyr"},
      {"Id":568, "Model":"Magna Steyr AG & Co KG"},
      {"Id":569, "Model":"Mahindra & Mahindra"},
      {"Id":570, "Model":"Mahindra Reva Electric Vehicles"},
      {"Id":571, "Model":"Maico"},
      {"Id":572, "Model":"Manic GT"},
      {"Id":573, "Model":"Marauder"},
      {"Id":574, "Model":"Marcos Engineering"},
      {"Id":575, "Model":"Marendaz"},
      {"Id":576, "Model":"MarkranstÃ¤dter Automobilfabrik"},
      {"Id":577, "Model":"Marlei"},
      {"Id":578, "Model":"Marmon"},
      {"Id":579, "Model":"Martin"},
      {"Id":580, "Model":"Martini"},
      {"Id":581, "Model":"Marussia Motors"},
      {"Id":582, "Model":"Maruti Suzuki India"},
      {"Id":583, "Model":"Maserati"},
      {"Id":584, "Model":"Mastretta"},
      {"Id":585, "Model":"Matra"},
      {"Id":586, "Model":"Matra Bonnet"},
      {"Id":587, "Model":"Matra-Simca"},
      {"Id":588, "Model":"Matra-Talbot"},
      {"Id":589, "Model":"Maudslay"},
      {"Id":590, "Model":"MAVA"},
      {"Id":591, "Model":"Maxwell"},
      {"Id":592, "Model":"Maybach"},
      {"Id":593, "Model":"Mazda"},
      {"Id":594, "Model":"MCC"},
      {"Id":595, "Model":"McLaren"},
      {"Id":596, "Model":"McLaughlin Carriage Company"},
      {"Id":597, "Model":"MCV"},
      {"Id":598, "Model":"MDI"},
      {"Id":599, "Model":"MÃ©canique Aviation Traction"},
      {"Id":600, "Model":"Meeussen"},
      {"Id":601, "Model":"Mega"},
      {"Id":602, "Model":"Mekong Auto"},
      {"Id":603, "Model":"Melkus"},
      {"Id":604, "Model":"Mercedes-Benz"},
      {"Id":605, "Model":"Mercer"},
      {"Id":606, "Model":"Mercury"},
      {"Id":607, "Model":"Merkur"},
      {"Id":608, "Model":"Messerschmitt"},
      {"Id":609, "Model":"MÃ©tallurgique"},
      {"Id":610, "Model":"MG Motor"},
      {"Id":611, "Model":"Micro Cars"},
      {"Id":612, "Model":"Microcar"},
      {"Id":613, "Model":"Minerva"},
      {"Id":614, "Model":"Minetti"},
      {"Id":615, "Model":"Mini"},
      {"Id":616, "Model":"Mitchell"},
      {"Id":617, "Model":"Mitsubishi"},
      {"Id":618, "Model":"Mitsuoka Motors"},
      {"Id":619, "Model":"MK Sportscars"},
      {"Id":620, "Model":"Mobius Motors"},
      {"Id":621, "Model":"Mohs"},
      {"Id":622, "Model":"Momo"},
      {"Id":623, "Model":"Monica"},
      {"Id":624, "Model":"Monteverdi"},
      {"Id":625, "Model":"Moose Jaw Standard"},
      {"Id":626, "Model":"Morattab"},
      {"Id":627, "Model":"Moretti"},
      {"Id":628, "Model":"Morgan Motor Company"},
      {"Id":629, "Model":"Morris Motors"},
      {"Id":630, "Model":"Moskvitch"},
      {"Id":631, "Model":"Moskvitch"},
      {"Id":632, "Model":"Mosler Automotive"},
      {"Id":633, "Model":"MÃ¶ve 101"},
      {"Id":634, "Model":"MTX aka Metalex"},
      {"Id":635, "Model":"Muntz"},
      {"Id":636, "Model":"MVS"},
      {"Id":637, "Model":"MZKT"},
      {"Id":638, "Model":"N H Buchanan Motor Co"},
      {"Id":639, "Model":"NAG"},
      {"Id":640, "Model":"Nagant & Cie, LiÃ¨ge"},
      {"Id":641, "Model":"NAM"},
      {"Id":642, "Model":"NAMCO"},
      {"Id":643, "Model":"Nardi"},
      {"Id":644, "Model":"Nash"},
      {"Id":645, "Model":"Nasr"},
      {"Id":646, "Model":"National"},
      {"Id":647, "Model":"Navistar"},
      {"Id":648, "Model":"NAZ"},
      {"Id":649, "Model":"Nazzaro"},
      {"Id":650, "Model":"Neorion"},
      {"Id":651, "Model":"Netuar"},
      {"Id":652, "Model":"Nissan"},
      {"Id":653, "Model":"Nissan Motor Company "},
      {"Id":654, "Model":"Noble"},
      {"Id":655, "Model":"Norsk Automobil & Vagnfabrik AS"},
      {"Id":656, "Model":"Nota Sports and Racing"},
      {"Id":657, "Model":"NSU"},
      {"Id":658, "Model":"Nyayo"},
      {"Id":659, "Model":"Nysa"},
      {"Id":660, "Model":"Oakland"},
      {"Id":661, "Model":"Obvio"},
      {"Id":662, "Model":"ODA"},
      {"Id":663, "Model":"Ogle"},
      {"Id":664, "Model":"Ohta Jidosha"},
      {"Id":665, "Model":"Oka"},
      {"Id":666, "Model":"OKA Australia"},
      {"Id":667, "Model":"Oldsmobile"},
      {"Id":668, "Model":"OM"},
      {"Id":669, "Model":"Opel"},
      {"Id":670, "Model":"Opel India"},
      {"Id":671, "Model":"Orca Engineering"},
      {"Id":672, "Model":"Osca"},
      {"Id":673, "Model":"OSI"},
      {"Id":674, "Model":"Ã–sterreichische Austro-Fiat"},
      {"Id":675, "Model":"Otomo"},
      {"Id":676, "Model":"Overland"},
      {"Id":677, "Model":"Packard"},
      {"Id":678, "Model":"Pag"},
      {"Id":679, "Model":"Pagani"},
      {"Id":680, "Model":"Paige"},
      {"Id":681, "Model":"Pan-Car"},
      {"Id":682, "Model":"Panhard"},
      {"Id":683, "Model":"Panoz"},
      {"Id":684, "Model":"Panther"},
      {"Id":685, "Model":"Paramount"},
      {"Id":686, "Model":"Paterson"},
      {"Id":687, "Model":"Peel"},
      {"Id":688, "Model":"Peerless"},
      {"Id":689, "Model":"Pender-Hertel"},
      {"Id":690, "Model":"Pennsylvania"},
      {"Id":691, "Model":"Perana Performance Group"},
      {"Id":692, "Model":"Perodua"},
      {"Id":693, "Model":"Perry"},
      {"Id":694, "Model":"Peugeot"},
      {"Id":695, "Model":"PGO Automobiles"},
      {"Id":696, "Model":"Phantom Corsair"},
      {"Id":697, "Model":"Picchio"},
      {"Id":698, "Model":"Pieper"},
      {"Id":699, "Model":"Pierce-Arrow"},
      {"Id":700, "Model":"Pinguin"},
      {"Id":701, "Model":"Pininfarina"},
      {"Id":702, "Model":"Piontek"},
      {"Id":703, "Model":"Pipe"},
      {"Id":704, "Model":"Pirin-Fiat"},
      {"Id":705, "Model":"Playboy"},
      {"Id":706, "Model":"Plymouth"},
      {"Id":707, "Model":"Plymouth"},
      {"Id":708, "Model":"Polaris Industries"},
      {"Id":709, "Model":"Polarsun Automobile"},
      {"Id":710, "Model":"Pontiac"},
      {"Id":711, "Model":"Porsche"},
      {"Id":712, "Model":"PORTARO"},
      {"Id":713, "Model":"Praga"},
      {"Id":714, "Model":"PRB"},
      {"Id":715, "Model":"Premier Ltd"},
      {"Id":716, "Model":"Prince Motor Company"},
      {"Id":717, "Model":"Prodrive"},
      {"Id":718, "Model":"Proto Motors"},
      {"Id":719, "Model":"Proton"},
      {"Id":720, "Model":"Puch"},
      {"Id":721, "Model":"Puli"},
      {"Id":722, "Model":"Puma"},
      {"Id":723, "Model":"Purvis Eureka"},
      {"Id":724, "Model":"Pyeonghwa Motors"},
      {"Id":725, "Model":"Python"},
      {"Id":726, "Model":"Qoros Auto Co"},
      {"Id":727, "Model":"Qoros Auto Co"},
      {"Id":728, "Model":"Queen"},
      {"Id":729, "Model":"Qvale"},
      {"Id":730, "Model":"Radical"},
      {"Id":731, "Model":"Railton"},
      {"Id":732, "Model":"Ram"},
      {"Id":733, "Model":"Rambler"},
      {"Id":734, "Model":"Rapier"},
      {"Id":735, "Model":"Raymond Mays"},
      {"Id":736, "Model":"RCH"},
      {"Id":737, "Model":"Reliant"},
      {"Id":738, "Model":"Renault"},
      {"Id":739, "Model":"Renault Samsung Motors"},
      {"Id":740, "Model":"Revere"},
      {"Id":741, "Model":"Rickenbacker"},
      {"Id":742, "Model":"Riga Autobus Factory"},
      {"Id":743, "Model":"Riley"},
      {"Id":744, "Model":"Rimac Automobili"},
      {"Id":745, "Model":"Rinspeed"},
      {"Id":746, "Model":"Roamer"},
      {"Id":747, "Model":"Rocar"},
      {"Id":748, "Model":"Rochdale"},
      {"Id":749, "Model":"Rochet-Schneider"},
      {"Id":750, "Model":"Roewe"},
      {"Id":751, "Model":"Rolls-Royce"},
      {"Id":752, "Model":"Rootes Australia"},
      {"Id":753, "Model":"Rosenbauer"},
      {"Id":754, "Model":"Rossion Automotive"},
      {"Id":755, "Model":"Rossion Automotive"},
      {"Id":756, "Model":"Rover Company"},
      {"Id":757, "Model":"Ruf Automobile GmbH"},
      {"Id":758, "Model":"Rumpler"},
      {"Id":759, "Model":"Russell Motor"},
      {"Id":760, "Model":"Russo-Balt"},
      {"Id":761, "Model":"Ruston-Hornsby"},
      {"Id":762, "Model":"Saab"},
      {"Id":763, "Model":"SAIC Motor Corporation"},
      {"Id":764, "Model":"Sainte Claire"},
      {"Id":765, "Model":"SAIPA"},
      {"Id":766, "Model":"Saker"},
      {"Id":767, "Model":"Saleen"},
      {"Id":768, "Model":"Salmson"},
      {"Id":769, "Model":"San Storm"},
      {"Id":770, "Model":"Santa Matilde"},
      {"Id":771, "Model":"Saturn"},
      {"Id":772, "Model":"Saxon"},
      {"Id":773, "Model":"Sbarro"},
      {"Id":774, "Model":"Scania"},
      {"Id":775, "Model":"Scavas"},
      {"Id":776, "Model":"Scion"},
      {"Id":777, "Model":"Scion"},
      {"Id":778, "Model":"Scott"},
      {"Id":779, "Model":"Scripps-Booth"},
      {"Id":780, "Model":"SEAT, S.A."},
      {"Id":781, "Model":"Seoudi Group"},
      {"Id":782, "Model":"SG Automotive Group"},
      {"Id":783, "Model":"Shaanxi Automobile Group"},
      {"Id":784, "Model":"Shamrock"},
      {"Id":785, "Model":"Shanghai Maple Guorun Automobile Co"},
      {"Id":786, "Model":"Sheffield-Simplex"},
      {"Id":787, "Model":"Shelby"},
      {"Id":788, "Model":"Shrike"},
      {"Id":789, "Model":"Shuanghuan Auto"},
      {"Id":790, "Model":"Siam Di Tella"},
      {"Id":791, "Model":"Siata"},
      {"Id":792, "Model":"Sichuan Tengzhong"},
      {"Id":793, "Model":"Simca"},
      {"Id":794, "Model":"Simca do Brasil"},
      {"Id":795, "Model":"Simca Vedette"},
      {"Id":796, "Model":"Singer"},
      {"Id":797, "Model":"Sisu Auto"},
      {"Id":798, "Model":"Å koda Auto"},
      {"Id":799, "Model":"Smart"},
      {"Id":800, "Model":"SML Isuzu"},
      {"Id":801, "Model":"Sofia"},
      {"Id":802, "Model":"SOMACA"},
      {"Id":803, "Model":"Soueast"},
      {"Id":804, "Model":"Southern Cross"},
      {"Id":805, "Model":"Sovam"},
      {"Id":806, "Model":"SPA"},
      {"Id":807, "Model":"Spadaconcept"},
      {"Id":808, "Model":"Spectre"},
      {"Id":809, "Model":"Speranza Motors, Ltd"},
      {"Id":810, "Model":"Spetsteh"},
      {"Id":811, "Model":"Springuel"},
      {"Id":812, "Model":"Spyker N.V."},
      {"Id":813, "Model":"Squire"},
      {"Id":814, "Model":"SRT"},
      {"Id":815, "Model":"SsangYong Motor Company"},
      {"Id":816, "Model":"SSC North America"},
      {"Id":817, "Model":"Sta Milde"},
      {"Id":818, "Model":"Standard"},
      {"Id":819, "Model":"Stanley"},
      {"Id":820, "Model":"Stearns Knight"},
      {"Id":821, "Model":"Stephens"},
      {"Id":822, "Model":"Steyr"},
      {"Id":823, "Model":"Stoewer"},
      {"Id":824, "Model":"Strathcarron"},
      {"Id":825, "Model":"Studebaker"},
      {"Id":826, "Model":"Studebaker of Canada Ltd"},
      {"Id":827, "Model":"Stutz"},
      {"Id":828, "Model":"Subaru"},
      {"Id":829, "Model":"Suminoe"},
      {"Id":830, "Model":"Sunbeam"},
      {"Id":831, "Model":"Superformance"},
      {"Id":832, "Model":"Suzuki Motor Corporation"},
      {"Id":833, "Model":"Swallow Doretti"},
      {"Id":834, "Model":"Syrena"},
      {"Id":835, "Model":"Talbot"},
      {"Id":836, "Model":"Tamplin"},
      {"Id":837, "Model":"Tara International"},
      {"Id":838, "Model":"Tarrant Automobile"},
      {"Id":839, "Model":"Tata Motor"},
      {"Id":840, "Model":"Tatra"},
      {"Id":841, "Model":"Tauro Sport Auto"},
      {"Id":842, "Model":"TAZ"},
      {"Id":843, "Model":"Tchaika"},
      {"Id":844, "Model":"Tecnologia Automotiva Catarinense"},
      {"Id":845, "Model":"Temperino"},
      {"Id":846, "Model":"Tesla"},
      {"Id":847, "Model":"Tesla Motors"},
      {"Id":848, "Model":"Th. Schneider"},
      {"Id":849, "Model":"Thai Rung"},
      {"Id":850, "Model":"Thames"},
      {"Id":851, "Model":"The Knight XV"},
      {"Id":852, "Model":"The Roo Motor"},
      {"Id":853, "Model":"Theologou"},
      {"Id":854, "Model":"Think Global"},
      {"Id":855, "Model":"Timmis Motor Company"},
      {"Id":856, "Model":"TMC Costin"},
      {"Id":857, "Model":"TofaÅŸ"},
      {"Id":858, "Model":"Tommykaira"},
      {"Id":859, "Model":"Tornado"},
      {"Id":860, "Model":"Toyota"},
      {"Id":861, "Model":"Toyota Motor Corporation "},
      {"Id":862, "Model":"Trabant"},
      {"Id":863, "Model":"Trackson"},
      {"Id":864, "Model":"Tracta"},
      {"Id":865, "Model":"Tramontana"},
      {"Id":866, "Model":"Trekka"},
      {"Id":867, "Model":"TREKOL"},
      {"Id":868, "Model":"Treser"},
      {"Id":869, "Model":"Trevethan"},
      {"Id":870, "Model":"Trident Cars Ltd"},
      {"Id":871, "Model":"Triking"},
      {"Id":872, "Model":"Triumph Motor Company"},
      {"Id":873, "Model":"Trojan"},
      {"Id":874, "Model":"Troll"},
      {"Id":875, "Model":"Troller"},
      {"Id":876, "Model":"Tsukuba"},
      {"Id":877, "Model":"Tucker"},
      {"Id":878, "Model":"Turcat-MÃ©ry"},
      {"Id":879, "Model":"Turner"},
      {"Id":880, "Model":"Tushek & Spigel Supercars GmbH"},
      {"Id":881, "Model":"TVR"},
      {"Id":882, "Model":"Twombly"},
      {"Id":883, "Model":"UAZ"},
      {"Id":884, "Model":"Ukrainian Automobile Corporation JSC"},
      {"Id":885, "Model":"Ultima Sports Ltd."},
      {"Id":886, "Model":"UMM"},
      {"Id":887, "Model":"Unic"},
      {"Id":888, "Model":"Unicar"},
      {"Id":889, "Model":"Unipower"},
      {"Id":890, "Model":"Vaillante"},
      {"Id":891, "Model":"Vale"},
      {"Id":892, "Model":"Valmet Automotive"},
      {"Id":893, "Model":"VAM"},
      {"Id":894, "Model":"Van Hool NV"},
      {"Id":895, "Model":"Vanden Plas"},
      {"Id":896, "Model":"Vandenbrink"},
      {"Id":897, "Model":"Vauxhall"},
      {"Id":898, "Model":"Vauxhall Motors"},
      {"Id":899, "Model":"VDL Nedcar"},
      {"Id":900, "Model":"Vector Motors Corporation"},
      {"Id":901, "Model":"Vegantune"},
      {"Id":902, "Model":"Velie"},
      {"Id":903, "Model":"Vemac"},
      {"Id":904, "Model":"Vencer"},
      {"Id":905, "Model":"Venturi"},
      {"Id":906, "Model":"Venturi"},
      {"Id":907, "Model":"Vermorel"},
      {"Id":908, "Model":"Vernon-Derby"},
      {"Id":909, "Model":"Vespa"},
      {"Id":910, "Model":"Victoria"},
      {"Id":911, "Model":"Vignale"},
      {"Id":912, "Model":"Vinaxukior Xuan Kien"},
      {"Id":913, "Model":"Vinci"},
      {"Id":914, "Model":"Vivinus"},
      {"Id":915, "Model":"Voisin"},
      {"Id":916, "Model":"Volga"},
      {"Id":917, "Model":"Volkswagen"},
      {"Id":918, "Model":"Volvo"},
      {"Id":919, "Model":"W Motors"},
      {"Id":920, "Model":"Wallyscar"},
      {"Id":921, "Model":"Waltham"},
      {"Id":922, "Model":"Wanderer"},
      {"Id":923, "Model":"Warren-Lambert"},
      {"Id":924, "Model":"Warszawa"},
      {"Id":925, "Model":"Wartburg"},
      {"Id":926, "Model":"Warwick"},
      {"Id":927, "Model":"Wendax"},
      {"Id":928, "Model":"Westfield Sportscar"},
      {"Id":929, "Model":"Wiesmann"},
      {"Id":930, "Model":"Wiima"},
      {"Id":931, "Model":"Wills"},
      {"Id":932, "Model":"Willys"},
      {"Id":933, "Model":"Willys-Overland"},
      {"Id":934, "Model":"Winnipeg"},
      {"Id":935, "Model":"Wolseley"},
      {"Id":936, "Model":"Woodill"},
      {"Id":937, "Model":"Xinkai"},
      {"Id":938, "Model":"Yamaha"},
      {"Id":939, "Model":"Yes!"},
      {"Id":940, "Model":"Yo-Mobil"},
      {"Id":941, "Model":"Youngman"},
      {"Id":942, "Model":"Yue Lo0ng"},
      {"Id":943, "Model":"Yutong"},
      {"Id":944, "Model":"Zagato"},
      {"Id":945, "Model":"Zagross Khodro"},
      {"Id":946, "Model":"Zastava Special Vehicles"},
      {"Id":947, "Model":"ZAZor Zaporizhia Automobile Building Plant"},
      {"Id":948, "Model":"Zbrojovka Brno"},
      {"Id":949, "Model":"ZÃ©del"},
      {"Id":950, "Model":"Zender"},
      {"Id":951, "Model":"Zenvo"},
      {"Id":952, "Model":"Zeta"},
      {"Id":953, "Model":"Zhonghua"},
      {"Id":954, "Model":"ZiL"},
      {"Id":955, "Model":"Zimmer"},
      {"Id":956, "Model":"ZIS"},
      {"Id":957, "Model":"Zotye Auto"},
      {"Id":958, "Model":"Å»uk"},
      {"Id":959, "Model":"Zundapp"},
      {"Id":960, "Model":"Zust"},
      {"Id":961, "Model":"ZX Auto"}].sort((a,b) => (a.Model > b.Model) ? 1 : ((b.Model > a.Model) ? -1 : 0));
  }
}
