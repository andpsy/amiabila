import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, Zona9, TariCarteVerde } from '../entities';
let Zona9Component = class Zona9Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona9 = new Zona9();
        this.Tari = new TariCarteVerde();
        this.TariTemp = new TariCarteVerde();
    }
    ngOnInit() {
        this.Tara.control.value = this.Zona9.Tara = "ROMANIA";
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona9.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona9);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    filterItem(event) {
        if (!event) {
            this.Tari.Tari = this.TariTemp.Tari;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            console.log(event);
            this.Tari.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                .startsWith(event.toLowerCase()));
        }
    }
    preiaInfoAsigurat() {
        if (this.Zona9.IdenticCuAsiguratul) {
            this.Zona9.Nume = this.Zona6.Nume;
            this.Zona9.Prenume = this.Zona6.Prenume;
            this.Zona9.Adresa = this.Zona6.Adresa;
            this.Zona9.Tara = this.Zona6.Tara;
            this.Zona9.Telefon = this.Zona6.Telefon;
            this.Zona9.Email = this.Zona6.Email;
        }
        else {
            this.Zona9 = new Zona9();
        }
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona9Component.prototype, "childForm", void 0);
__decorate([
    ViewChild("Tara", { static: true })
], Zona9Component.prototype, "Tara", void 0);
__decorate([
    Input()
], Zona9Component.prototype, "Zona9", void 0);
__decorate([
    Output()
], Zona9Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona9Component.prototype, "step", void 0);
__decorate([
    Input()
], Zona9Component.prototype, "Zona6", void 0);
Zona9Component = __decorate([
    Component({
        selector: 'app-zona9',
        templateUrl: './zona9.component.html',
        styleUrls: ['./zona9.component.css']
    })
], Zona9Component);
export { Zona9Component };
//# sourceMappingURL=zona9.component.js.map