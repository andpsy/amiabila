import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
let AditionaleComponent = class AditionaleComponent {
    //public SocietatiCasco: SocietatiAsigurare;
    //public SocietatiCascoTemp: SocietatiAsigurare;  
    constructor() {
        //this.Zona1 = new Zona1();
        //this.SocietatiCasco = new SocietatiAsigurare();
        //this.SocietatiCascoTemp = new SocietatiAsigurare();
    }
    ngOnInit() {
    }
    /*
    filterSocietati(event):void{
        if(!event){
            this.SocietatiCasco.Societati = this.SocietatiCascoTemp.Societati;
        } // when nothing has typed
        if (typeof event === 'string') {
            console.log(event);
            this.SocietatiCasco.Societati = this.SocietatiCascoTemp.Societati.filter(a => a.Denumire.toLowerCase()
                                               .startsWith(event.toLowerCase()));
        }
     }
     */
    pagubitDecontareDirecta() {
        switch (this.Zona12.VinovatSelectat) {
            case 'A':
                return this.Zona8B.DecontareDirecta;
            case 'B':
                return this.Zona8A.DecontareDirecta;
            default:
                return false;
        }
    }
    vinovatCasco() {
        switch (this.Zona12.VinovatSelectat) {
            case 'A':
                return this.Zona8A.Casco;
            case 'B':
                return this.Zona8B.Casco;
            case 'AB':
                return this.Zona8A.Casco || this.Zona8B.Casco;
            default:
                return false;
        }
    }
};
__decorate([
    Input()
], AditionaleComponent.prototype, "Zona12", void 0);
__decorate([
    Input()
], AditionaleComponent.prototype, "Aditionale", void 0);
__decorate([
    Input()
], AditionaleComponent.prototype, "Zona8A", void 0);
__decorate([
    Input()
], AditionaleComponent.prototype, "Zona8B", void 0);
__decorate([
    ViewChild("childForm", { static: true })
], AditionaleComponent.prototype, "childForm", void 0);
AditionaleComponent = __decorate([
    Component({
        selector: 'app-aditionale',
        templateUrl: './aditionale.component.html',
        styleUrls: ['./aditionale.component.css']
    })
], AditionaleComponent);
export { AditionaleComponent };
//# sourceMappingURL=aditionale.component.js.map