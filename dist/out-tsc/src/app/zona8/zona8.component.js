import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, TariCarteVerde, SocietatiAsigurare, USE_FORM } from '../entities';
let Zona8Component = class Zona8Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        this.use_form = USE_FORM;
        this.zonashow = null;
        this.icon = null;
        //this.Zona8 = new Zona8();
        this.Tari = new TariCarteVerde();
        this.TariTemp = new TariCarteVerde();
        this.SocietatiRCA = new SocietatiAsigurare();
        this.SocietatiRCATemp = new SocietatiAsigurare();
        this.SocietatiCASCO = new SocietatiAsigurare();
        this.SocietatiCASCOTemp = new SocietatiAsigurare();
    }
    ngOnInit() {
        this.zonashow = this.step == 25 ? true : false;
        this.icon = this.step == 25 ? 'expand_less' : 'expand_more';
        this.Tara.control.value = this.Zona8.Tara = "ROMANIA";
        this.SocietatiRCA.Societati = this.SocietatiRCA.Societati.filter(a => a.RCA == true);
        this.SocietatiRCATemp.Societati = this.SocietatiRCATemp.Societati.filter(a => a.RCA == true);
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona8.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona8);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    filterItem(event) {
        if (!event) {
            this.Tari.Tari = this.TariTemp.Tari;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            this.Tari.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                .startsWith(event.toLowerCase()));
        }
    }
    filterSocietati(event) {
        if (!event) {
            this.SocietatiRCA.Societati = this.SocietatiRCATemp.Societati;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            this.SocietatiRCA.Societati = this.SocietatiRCATemp.Societati.filter(a => a.Denumire.toLowerCase()
                .startsWith(event.toLowerCase()));
        }
    }
    filterSocietatiCasco(event) {
        if (!event) {
            this.SocietatiCASCO.Societati = this.SocietatiCASCOTemp.Societati;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            this.SocietatiCASCO.Societati = this.SocietatiCASCOTemp.Societati.filter(a => a.Denumire.toLowerCase()
                .startsWith(event.toLowerCase()));
        }
    }
    changeZona() {
        this.zonashow = !this.zonashow;
        this.icon = !this.zonashow ? 'expand_more' : 'expand_less';
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona8Component.prototype, "childForm", void 0);
__decorate([
    ViewChild("Tara", { static: true })
], Zona8Component.prototype, "Tara", void 0);
__decorate([
    ViewChild("Denumire", { static: true })
], Zona8Component.prototype, "Denumire", void 0);
__decorate([
    Input()
], Zona8Component.prototype, "Zona8", void 0);
__decorate([
    Output()
], Zona8Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona8Component.prototype, "step", void 0);
Zona8Component = __decorate([
    Component({
        selector: 'app-zona8',
        templateUrl: './zona8.component.html',
        styleUrls: ['./zona8.component.css']
    })
], Zona8Component);
export { Zona8Component };
//# sourceMappingURL=zona8.component.js.map