import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let Zona12Component = class Zona12Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona12 = new Zona12();
    }
    ngOnInit() {
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona12.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona12);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    refreshCasute() {
        this.Zona12.CasuteA = this.Zona12.CasuteB = 0;
        for (var i = 0; i < this.Zona12.Imprejurari.Imprejurari.length; i++) {
            this.Zona12.CasuteA += this.Zona12.Imprejurari.Imprejurari[i].VehiculA ? 1 : 0;
            this.Zona12.CasuteB += this.Zona12.Imprejurari.Imprejurari[i].VehiculB ? 1 : 0;
        }
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona12Component.prototype, "childForm", void 0);
__decorate([
    Input()
], Zona12Component.prototype, "Zona12", void 0);
__decorate([
    Input()
], Zona12Component.prototype, "Aditionale", void 0);
__decorate([
    Input()
], Zona12Component.prototype, "Zona8A", void 0);
__decorate([
    Input()
], Zona12Component.prototype, "Zona8B", void 0);
__decorate([
    Output()
], Zona12Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona12Component.prototype, "step", void 0);
Zona12Component = __decorate([
    Component({
        selector: 'app-zona12',
        templateUrl: './zona12.component.html',
        styleUrls: ['./zona12.component.css']
    })
], Zona12Component);
export { Zona12Component };
//# sourceMappingURL=zona12.component.js.map