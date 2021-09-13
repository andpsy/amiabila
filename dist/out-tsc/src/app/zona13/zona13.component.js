import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
import { GOOGLE_API_KEY } from '../entities';
//import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
let Zona13Component = class Zona13Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        this.putCarAB = null;
        //canvas:any;
        this.ImgLst = [];
        this.selectedImgId = null;
        this.zoom = this.CommonFunctions.IMG_CAPTURE_ZOOM;
        this.idIndex = 0;
        //this.Zona13 = new Zona13();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
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
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona13.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona13);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    clearCanvas() {
        //this.signaturePad.clear();
    }
    setImgMap(event) {
        //console.log(this.Zona13.ImgMap);
        if (this.Zona13.ImgMap) {
            var staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?";
            staticMapUrl += "key=" + GOOGLE_API_KEY;
            staticMapUrl += "&center=" + this.Zona13.ImgMap;
            //staticMapUrl += "&size=" + this.CommonFunctions.IMG_CAPTURE_SIZE;
            //staticMapUrl += "&size=" + this.canvas.width + "x" + this.canvas.height;
            staticMapUrl += "&size=" + this.canvasDiv.clientWidth + "x" + this.canvasDiv.clientHeight;
            staticMapUrl += "&zoom=" + this.zoom;
            staticMapUrl += "&maptype=" + this.CommonFunctions.IMG_MAP_ID;
            this.canvasDiv.style.backgroundImage = "url('" + staticMapUrl + "')";
        }
    }
    putCar(event) {
        //console.log(event);
        if (this.selectedImgId != null && event.srcElement.id == "canvas") {
            document.getElementById(this.selectedImgId).style.border = "0px solid gray";
            this.selectedImgId = null;
        }
        if (this.putCarAB == null)
            return;
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
                elem.id = "As"; // + this.idIndex; // daca vrem sa putem pune mai multe masini pe desem
                elem.style.height = "33px";
                elem.style.width = "20px";
                // this.idIndex++; // daca vrem sa putem pune mai multe masini pe desem
                break;
            case "B":
                elem.src = "../assets/Bs.png";
                elem.id = "Bs"; // + this.idIndex; // daca vrem sa putem pune mai multe masini pe desem
                elem.style.height = "33px";
                elem.style.width = "20px";
                // this.idIndex++; // daca vrem sa putem pune mai multe masini pe desem
                break;
            case "T":
                elem.setAttribute("type", "text");
                elem.id = "Ts" + this.idIndex;
                elem.className = "imgText";
                this.idIndex++;
                break;
            default:
                break;
        }
        elem.style.position = "absolute";
        elem.style.cursor = "pointer";
        elem.style.left = event.clientX - rect.left + 10 + 'px';
        elem.style.top = event.clientY - rect.top + 33 + 'px';
        elem.style.border = "1px solid gray";
        document.getElementById("canvas").appendChild(elem);
        elem.addEventListener('click', this.onClick.bind(this));
        this.ImgLst.push({ 'Id': elem.id, 'RotateStep': 0, 'MoveStepX': 0, "MoveStepY": 0 });
        this.putCarAB = null;
        this.selectedImgId = elem.id;
    }
    getImgById(id) {
        return this.ImgLst.find(x => x.Id === id);
    }
    onClick(event) {
        //console.log(event);
        if (this.selectedImgId != null) {
            document.getElementById(this.selectedImgId).style.border = "0px solid gray";
        }
        this.selectedImgId = event.srcElement.id;
        document.getElementById(this.selectedImgId).style.border = "1px solid gray";
    }
    rotateImg(direction) {
        if (this.selectedImgId != null) {
            var idx = this.getImg(this.selectedImgId);
            if (idx >= 0) {
                this.ImgLst[idx].RotateStep += direction;
                document.getElementById(this.selectedImgId).style.transform = "rotate(" + this.ImgLst[idx].RotateStep * 15 + "deg)";
            }
        }
    }
    moveXImg(direction) {
        if (this.selectedImgId != null) {
            var idx = this.getImg(this.selectedImgId);
            if (idx >= 0) {
                this.ImgLst[idx].MoveStepX = direction;
                document.getElementById(this.selectedImgId).style.left = Number.parseInt(document.getElementById(this.selectedImgId).style.left.replace("px", "")) +
                    (this.ImgLst[idx].MoveStepX * 5) + "px";
            }
        }
    }
    moveYImg(direction) {
        if (this.selectedImgId != null) {
            var idx = this.getImg(this.selectedImgId);
            if (idx >= 0) {
                this.ImgLst[idx].MoveStepY = direction;
                document.getElementById(this.selectedImgId).style.top = Number.parseInt(document.getElementById(this.selectedImgId).style.top.replace("px", "")) +
                    (this.ImgLst[idx].MoveStepY * 5) + "px";
            }
        }
    }
    deleteImg() {
        if (this.selectedImgId != null) {
            var idx = this.getImg(this.selectedImgId);
            if (idx >= 0) {
                var parentElement = document.getElementById(this.selectedImgId).parentNode;
                parentElement.removeChild(document.getElementById(this.selectedImgId));
                this.selectedImgId = null;
            }
        }
    }
    getImg(id) {
        for (var i = 0; i < this.ImgLst.length; i++) {
            if (id === this.ImgLst[i].Id) {
                return i;
            }
        }
        return null;
    }
    saveImgMap() {
        /*
        var canvasImg = document.getElementById('canvasImg') as HTMLCanvasElement;
        html2canvas(this.canvasDiv, {allowTaint:true, useCORS:true, canvas:canvasImg, logging:false,
          scrollX: -window.scrollX,
          scrollY: -window.scrollY,
          windowWidth: document.documentElement.offsetWidth,
          windowHeight: document.documentElement.offsetHeight }).then(function(canvas) {
          //document.body.appendChild(canvas);
          canvasImg.style.display = 'block';
        });
        */
        domtoimage.toPng(this.canvasDiv)
            .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            //document.body.appendChild(img);
            var canvasImg = document.getElementById('canvasImg');
            canvasImg.appendChild(img);
            canvasImg.style.display = 'block';
        })
            .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }
    mapZoomIn() {
        this.zoom += 1;
        this.setImgMap(null);
    }
    mapZoomOut() {
        this.zoom -= 1;
        this.setImgMap(null);
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona13Component.prototype, "childForm", void 0);
__decorate([
    ViewChild('signatureContainer', { static: true })
], Zona13Component.prototype, "signatureContainer", void 0);
__decorate([
    ViewChild('canvas', { static: true })
], Zona13Component.prototype, "canvas", void 0);
__decorate([
    Input()
], Zona13Component.prototype, "Zona13", void 0);
__decorate([
    Output()
], Zona13Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona13Component.prototype, "step", void 0);
Zona13Component = __decorate([
    Component({
        selector: 'app-zona13',
        templateUrl: './zona13.component.html',
        styleUrls: ['./zona13.component.css']
    })
], Zona13Component);
export { Zona13Component };
//# sourceMappingURL=zona13.component.js.map