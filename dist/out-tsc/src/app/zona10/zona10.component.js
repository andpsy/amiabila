import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let Zona10Component = class Zona10Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        //public zonaImpact: string;
        this.CommonFunctions = CommonFunctions;
        //this.Zona2 = new Zona2();
        this.zoneImpact = CommonFunctions.ZoneImpact;
    }
    ngOnInit() {
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona10.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona10);
        }
        CommonFunctions.showDiv(step, visibility);
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona10Component.prototype, "childForm", void 0);
__decorate([
    Input()
], Zona10Component.prototype, "Zona10", void 0);
__decorate([
    Input()
], Zona10Component.prototype, "tipVehicul", void 0);
__decorate([
    Output()
], Zona10Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona10Component.prototype, "step", void 0);
Zona10Component = __decorate([
    Component({
        selector: 'app-zona10',
        templateUrl: './zona10.component.html',
        styleUrls: ['./zona10.component.css']
    })
], Zona10Component);
export { Zona10Component };
//# sourceMappingURL=zona10.component.js.map