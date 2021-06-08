import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, MarciAuto, TariCarteVerde } from '../entities';
let Zona7Component = class Zona7Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona7 = new Zona7();
        this.MarciAuto = new MarciAuto();
        this.MarciAutoTemp = new MarciAuto();
        this.TipVehicul = CommonFunctions.TipVehicul;
        this.TariMotor = new TariCarteVerde();
        this.TariRemorca = new TariCarteVerde();
        this.TariTemp = new TariCarteVerde();
    }
    ngOnInit() {
        this.MotorTaraInmatriculare.control.value = this.Zona7.Motor.TaraInmatriculare = "ROMANIA";
        this.RemorcaTaraInmatriculare.control.value = this.Zona7.Remorca.TaraInmatriculare = "ROMANIA";
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona7.StepCompleted = true;
            this.zoneCompleted.emit(true);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    onChangeofOptions(newGov) {
        //console.log(newGov);
    }
    filterItem(event) {
        if (!event) {
            this.MarciAuto.MarciAuto = this.MarciAutoTemp.MarciAuto;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            console.log(event);
            this.MarciAuto.MarciAuto = this.MarciAutoTemp.MarciAuto.filter(a => a.Model.toLowerCase()
                .startsWith(event.toLowerCase()));
        }
    }
    filterTari(event, tari) {
        if (!event) {
            switch (tari) {
                case "motor":
                    this.TariMotor.Tari = this.TariTemp.Tari;
                    break;
                case "remorca":
                    this.TariRemorca.Tari = this.TariTemp.Tari;
                    break;
            }
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            switch (tari) {
                case "motor":
                    this.TariMotor.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                        .startsWith(event.toLowerCase()));
                    break;
                case "remorca":
                    this.TariRemorca.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                        .startsWith(event.toLowerCase()));
                    break;
            }
        }
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona7Component.prototype, "childForm", void 0);
__decorate([
    ViewChild("MotorTaraInmatriculare", { static: true })
], Zona7Component.prototype, "MotorTaraInmatriculare", void 0);
__decorate([
    ViewChild("RemorcaTaraInmatriculare", { static: true })
], Zona7Component.prototype, "RemorcaTaraInmatriculare", void 0);
__decorate([
    Input()
], Zona7Component.prototype, "Zona7", void 0);
__decorate([
    Output()
], Zona7Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona7Component.prototype, "step", void 0);
Zona7Component = __decorate([
    Component({
        selector: 'app-zona7',
        templateUrl: './zona7.component.html',
        styleUrls: ['./zona7.component.css']
    })
], Zona7Component);
export { Zona7Component };
//# sourceMappingURL=zona7.component.js.map