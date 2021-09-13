//const cloneDeep = require('lodash.cloneDeep');
import * as _ from "lodash";
import { environment } from './../environments/environment';

export const GOOGLE_API_KEY = "AIzaSyBDS3LAPdSf1eV6wFFgxsjkn0qNJCuC2Eo";
export const USE_FORM = false; //daca vrem sa folosim formularul sau trecem direct la incarcare documente (inclusiv amiabil)
export const UPLOAD_FILE_THUMB_SIZE = 100;

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

export class CommonFunctions{
  public static DISABLE_BUTTONS_ON_VALIDATION_ERROR = false;
  // public static GOOGLE_API_KEY = "AIzaSyCgXPkbiFYrV2Na-_XmGN0sUjAUq3WVKCs";
  public static IMG_CAPTURE_ZOOM = 20;
  public static IMG_CAPTURE_SIZE = "300x300";
  public static IMG_MAP_ID = "roadmap";

  //public static SRV_ROOT = "https://localhost:44322/";
  public static SRV_ROOT = environment.apiUrl;
  public static SRV_URL = CommonFunctions.SRV_ROOT + "api/";
  public static SRV_RESOURCES_URL = CommonFunctions.SRV_ROOT + "Resources/Formulare/";

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

  public static DocumenteNecesare = [
    {"selected":false, "name":"Constat Amiabil"}, //se va scoate cand folosim formularul
    {"selected":false, "name":"CI soferi"}, 
    {"selected":false, "name":"Permise conducere soferi"}, 
    {"selected":false, "name":"Polite auto RCA"}, 
    {"selected":false, "name":"Alte acte"}];

  public static TipPozeFaraFormular = [
    {"selected":true, "name":"1. Constat Amiabil:", "multiple":false, "max_allowed":null}];

  public static TipPozeCuFormular = [
    {"selected":true, "name":"2. Carte/Buletin de identitate:", "multiple":false, "max_allowed":null}, 
    {"selected":false, "name":"3. Permis de conducere:", "multiple":false, "max_allowed":null},     
    {"selected":false, "name":"4. Imagini avarii auto:", "multiple":true, "max_allowed":5}];

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
      {'Step':24, 'DivId':'zona13Div', 'vehicul':null, 'zona':'Zona13', 'bgColor':'lightgray', 'color':'navy'},

      {'Step':25, 'DivId':'zona0Div', 'vehicul':null, 'zona':'ZonaFisiere', 'bgColor':'lightgray', 'color':'navy'},
      {'Step':26, 'DivId':'trimitereDiv', 'vehicul':null, 'zona':null, 'bgColor':'lightgray', 'color':'navy'}
      ];

  public static getPreviousStepDivId(idx:number):string{
    return idx < 1 ? null : CommonFunctions.Steps[idx-1].DivId;
  }
  public static getNextStepDivId(idx:number):string{
    return idx > CommonFunctions.Steps.length - 2 ? null : CommonFunctions.Steps[idx+1].DivId;
  }  

  public static copyObj(source:any, target:any){
    var toReturn = null;
    if(typeof source === 'object' && source !== null){
      if(Array.isArray(source)){
        if(source.length > 0){
          if(target == null || target == undefined || target.length < 1)
            toReturn = new Array(source.length);
          for(var i=0;i<source.length;i++){
            if(toReturn[i] == null || toReturn[i] == undefined)
              toReturn.push(CommonFunctions.copyObj(source[i], target[i]));
            else
              toReturn[i] = CommonFunctions.copyObj(source[i], target[i]);          
          }
        }
        else
          toReturn = [];
      }
      else
      {
        if(target == null || target == undefined)
          toReturn = {};
        const props = Object.keys(source);
        for (const prop of props) {
          toReturn[prop] = CommonFunctions.copyObj(source[prop], toReturn[prop]);
        }
      }
    }
    else
      toReturn = source;

    return toReturn;
  }


  public static copyObjI(source:any, target:any){
    if(Array.isArray(source)){
      if(source.length > 0){        
        if(!Array.isArray(target) || (Array.isArray(target) && target.length != source.length))
          target = new Array(source.length);
        for(var i=0;i<source.length;i++){
          if(typeof source[i] === 'object' && source[i] !== null){
              target[i] = CommonFunctions.copyObjI(source[i], target[i]);          
          }
          else
            target[i]=source[i];
        }
      }
      else{
        target = [];
      }
    }
    else
    {
      const props = Object.keys(source);
      for (const prop of props) {
        if(typeof source[prop] === 'object' && source[prop] !== null){
          try{
            /*
            if(Array.isArray(objVal)){            
              if(objVal.length > 0){
                if(!Array.isArray(target[prop]) || (Array.isArray(target[prop]) && target[prop].length != objVal.length))
                  target[prop] = new Array(objVal.length);
                for(var i=0;i<objVal.length;i++){
                  target[prop][i] = CommonFunctions.copyObj(objVal[i], target[prop][i]);          
                }
              }
              else{
                target[prop] = [];
              }
            }
            else
              target[prop] = CommonFunctions.copyObj(objVal, target[prop]);
            */
            /*
            if(Array.isArray(objVal)){
              target[prop] = objVal.slice();
              //target[prop] = [...objVal];
              //target[prop] = CommonFunctions.copyObj(objVal, target[prop]).slice();
              //target[prop] = new Array(CommonFunctions.copyObj(objVal, target[prop]));
              //CommonFunctions.copyObjI(objVal, target[prop]);
            }
            else
              */
              target[prop] = CommonFunctions.copyObjI(source[prop], target[prop]);
            
          }catch(e){console.log(prop); console.error(e);}
        }
        else{
          try{
            target[prop]=source[prop];
          }catch(e){console.log(prop); console.error(e);}
        }
      }
    }
    //target = _.cloneDeep(source);
    return target;
  }
}
