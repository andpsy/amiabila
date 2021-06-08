import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { SocietatiAsigurare } from '../entities';
let AditionaleComponent = class AditionaleComponent {
    constructor() {
        //this.Zona1 = new Zona1();
        this.SocietatiCasco = new SocietatiAsigurare();
        this.SocietatiCascoTemp = new SocietatiAsigurare();
    }
    ngOnInit() {
    }
    filterSocietati(event) {
        if (!event) {
            this.SocietatiCasco.Societati = this.SocietatiCascoTemp.Societati;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            console.log(event);
            this.SocietatiCasco.Societati = this.SocietatiCascoTemp.Societati.filter(a => a.Denumire.toLowerCase()
                .startsWith(event.toLowerCase()));
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