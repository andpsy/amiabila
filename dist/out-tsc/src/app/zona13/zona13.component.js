import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let Zona13Component = class Zona13Component {
    //canvas:any;
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        this.putCarAB = null;
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
            this.zoneCompleted.emit(true);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    clearCanvas() {
        //this.signaturePad.clear();
    }
    setImgMap(event) {
        if (this.Zona13.ImgMap) {
            console.log(this.canvasDiv);
            console.log(this.canvasDiv.style);
            var staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?";
            staticMapUrl += "key=" + this.CommonFunctions.GOOGLE_API_KEY;
            staticMapUrl += "&center=" + this.Zona13.ImgMap;
            //staticMapUrl += "&size=" + this.CommonFunctions.IMG_CAPTURE_SIZE;
            //staticMapUrl += "&size=" + this.canvas.width + "x" + this.canvas.height;
            staticMapUrl += "&size=" + this.canvasDiv.clientWidth + "x" + this.canvasDiv.clientHeight;
            staticMapUrl += "&zoom=" + this.CommonFunctions.IMG_CAPTURE_ZOOM;
            staticMapUrl += "&maptype=" + this.CommonFunctions.IMG_MAP_ID;
            /*
            var ctx = this.canvas.getContext("2d");
            var img = new Image();
            img.onload = function() {
                ctx.drawImage(img, 0, 0);
            };
            img.src = staticMapUrl;
            */
            this.canvasDiv.style.backgroundImage = "url('" + staticMapUrl + "')";
        }
    }
    putCar(event) {
        /*
        var ctx = this.canvas.getContext("2d");
        const rect = this.canvas.getBoundingClientRect();
        var img = new Image();
        img.onload = function() {
          //console.log(event);
          //console.log(event.clientX + ' - ' + event.layerX);
          //ctx.drawImage(img, event.clientX, event.clientY, 30, 50);
          //ctx.drawImage(img, event.layerX, event.layerY, 30, 50);
          ctx.drawImage(img, event.clientX-rect.left, event.clientY-rect.top, 20, 33);
        };
        switch (this.putCarAB) {
          case "A":
            img.src = "../assets/As.png";
            break;
          case "B":
            img.src = "../assets/Bs.png";
            break;
          default:
            break;
        }
        this.putCarAB = null;
        */
        if (!this.putCarAB)
            return;
        const rect = this.canvasDiv.getBoundingClientRect();
        var elem = document.createElement("img");
        switch (this.putCarAB) {
            case "A":
                elem.src = "../assets/As.png";
                break;
            case "B":
                elem.src = "../assets/Bs.png";
                break;
            default:
                break;
        }
        elem.style.height = "33px";
        elem.style.width = "20px";
        elem.style.position = "absolute";
        //console.log(event.clientX + '-' + event.clientY);
        //console.log((event.clientX-rect.left) + '-' + (event.clientY-rect.top));
        elem.style.left = event.clientX - (rect.left + 10) + 'px';
        elem.style.top = event.clientY - (rect.top + 16.5) + 'px';
        document.getElementById("canvas").appendChild(elem);
        this.putCarAB = null;
    }
    rotateImg() {
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