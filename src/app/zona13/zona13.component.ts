import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { CommonFunctions, Zona13, ImgMapList } from '../entities';
import { SignaturePad } from 'angular2-signaturepad';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-zona13',
  templateUrl: './zona13.component.html',
  styleUrls: ['./zona13.component.css']
})
export class Zona13Component implements OnInit {
	//public Zona13: Zona13;
	@ViewChild("childForm", {static: true}) childForm;
	@ViewChild('signatureContainer', {static: true}) signatureContainer;	
	//@ViewChild('signaturePad', {static: true}) signaturePad;	
  @ViewChild('canvas', {static: true}) canvas;  
  canvasDiv: HTMLElement;
  @Input() Zona13: Zona13;  
  @Output() zoneCompleted = new EventEmitter();
  @Input() step: number;  
  public CommonFunctions = CommonFunctions;  
  putCarAB = null;
  //canvas:any;
  ImgLst:ImgMapList[] = [];
  selectedImgId:string = null;

  constructor() { 
  	//this.Zona13 = new Zona13();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    //this.canvas = this.signaturePad.queryPad()._canvas;
  	//this.resizeSignaturePad(null);
    this.canvasDiv = this.canvas.nativeElement;
    this.setImgMap(null);
  }  

  /*
  resizeSignaturePad(event){
  	//this.signaturePad.set('canvasWidth', this.signatureContainer.nativeElement.clientWidth);
  	this.canvas.width = this.signatureContainer.nativeElement.clientWidth;  	
    this.canvas.height = "300";    
  }
  */

  showDiv(step:number, visibility:boolean):void{
    if(this.childForm.valid){
      this.Zona13.StepCompleted = true;
      this.zoneCompleted.emit(true);
    }
    CommonFunctions.showDiv(step, visibility);
  }

  clearCanvas():void{
  	//this.signaturePad.clear();
  }
  setImgMap(event){
    if(this.Zona13.ImgMap){
      var staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?";
      staticMapUrl += "key=" + this.CommonFunctions.GOOGLE_API_KEY;
      staticMapUrl += "&center=" + this.Zona13.ImgMap;
      //staticMapUrl += "&size=" + this.CommonFunctions.IMG_CAPTURE_SIZE;
      //staticMapUrl += "&size=" + this.canvas.width + "x" + this.canvas.height;
      staticMapUrl += "&size=" + this.canvasDiv.clientWidth + "x" + this.canvasDiv.clientHeight;
      staticMapUrl += "&zoom=" + this.CommonFunctions.IMG_CAPTURE_ZOOM;
      staticMapUrl += "&maptype=" + this.CommonFunctions.IMG_MAP_ID;
      this.canvasDiv.style.backgroundImage = "url('" + staticMapUrl + "')";
    }    
  }
  putCar(event){
    //console.log(event);
    if(this.selectedImgId != null && event.srcElement.id == "canvas"){
      document.getElementById(this.selectedImgId).style.border = "0px solid gray";    
      this.selectedImgId = null; 
    }
    if(this.putCarAB == null) return;

    const rect = this.canvasDiv.getBoundingClientRect();
    var type = null;
    switch (this.putCarAB) {
      case "A":
      case "B":
        type = "img";
        break;      
      default:
        type = "input";
        break;
    }

    var elem = document.createElement(type);
    switch (this.putCarAB) {
      case "A":
        elem.src = "../assets/As.png";      
        elem.id = "As";
        elem.style.height = "33px";
        elem.style.width = "20px";
        break;
      case "B":
        elem.src = "../assets/Bs.png";      
        elem.id = "Bs";
        elem.style.height = "33px";
        elem.style.width = "20px";
        break;      
      case "T":
        elem.setAttribute("type", "text");
        elem.id = "Ts";
        elem.className = "imgText";
        //elem.innerHTML = "<input type='text' class='imgInput' />";
        break;  
      default:
        break;
    }    
    elem.style.position = "absolute";
    elem.style.cursor = "pointer";
    elem.style.left = event.clientX-rect.left+10 + 'px';
    elem.style.top = event.clientY-rect.top+33 + 'px';
    elem.style.border = "1px solid gray";
    document.getElementById("canvas").appendChild(elem);   
    elem.addEventListener('click', this.onClick.bind(this));
    this.ImgLst.push({'Id':elem.id, 'RotateStep':0, 'MoveStepX':0, "MoveStepY":0});
    this.putCarAB = null;
    this.selectedImgId = elem.id;
  }

  onClick(event) {    
    //console.log(event);
    if(this.selectedImgId != null){
      document.getElementById(this.selectedImgId).style.border = "0px solid gray";
    }
    this.selectedImgId = event.srcElement.id;
    document.getElementById(this.selectedImgId).style.border = "1px solid gray";
  }

  rotateImg(direction:number){
    if(this.selectedImgId != null){
      var idx = this.getImg(this.selectedImgId);
      if(idx>=0){
        this.ImgLst[idx].RotateStep += direction;
        document.getElementById(this.selectedImgId).style.transform = "rotate(" + this.ImgLst[idx].RotateStep*15 + "deg)";
      }
    }
  }
  moveXImg(direction:number){
    if(this.selectedImgId != null){
      var idx = this.getImg(this.selectedImgId);
      if(idx>=0){
        this.ImgLst[idx].MoveStepX = direction;
        document.getElementById(this.selectedImgId).style.left = Number.parseInt(document.getElementById(this.selectedImgId).style.left.replace("px","")) + 
          (this.ImgLst[idx].MoveStepX*5) + "px";
      }
    }
  }
  moveYImg(direction:number){
    if(this.selectedImgId != null){
      var idx = this.getImg(this.selectedImgId);
      if(idx>=0){
        this.ImgLst[idx].MoveStepY = direction;
        document.getElementById(this.selectedImgId).style.top = Number.parseInt(document.getElementById(this.selectedImgId).style.top.replace("px","")) + 
          (this.ImgLst[idx].MoveStepY*5) + "px";
      }
    }
  }  

  deleteImg(){
    if(this.selectedImgId != null){
      var idx = this.getImg(this.selectedImgId);
      if(idx>=0){
        var parentElement = document.getElementById(this.selectedImgId).parentNode;
        parentElement.removeChild(document.getElementById(this.selectedImgId));    
        this.selectedImgId = null;    
     }
    }
  }


  getImg(id):number{
    for(var i=0;i<this.ImgLst.length;i++){
      if(id === this.ImgLst[i].Id){
        return i;
      }
    }
    return null;
  }

  saveImgMap(){
    var canvasImg = document.getElementById('canvasImg') as HTMLCanvasElement;
    html2canvas(this.canvasDiv, {allowTaint:true, useCORS:true, canvas:canvasImg, logging:false}).then(function(canvas) {
      //document.body.appendChild(canvas);
      canvasImg.style.display = 'block';
    });
  }
}
