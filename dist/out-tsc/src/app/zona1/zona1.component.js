import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let Zona1Component = class Zona1Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona1 = new Zona1();
    }
    ngOnInit() {
        if (this.Zona1.Data == null && this.Zona1.Ora == null) {
            this.Zona1.Data = new Date();
            this.Zona1.Ora = CommonFunctions.addZero(this.Zona1.Data.getHours()) + ":" + CommonFunctions.addZero(this.Zona1.Data.getMinutes());
        }
    }
    ngOnDestroy() {
        this.zoneCompleted = null;
    }
    showDiv(step, visibility) {
        if (this.childForm.valid && this.Zona1.hasError() == null) {
            this.Zona1.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona1);
        }
        CommonFunctions.showDiv(step, visibility);
    }
};
__decorate([
    Input()
], Zona1Component.prototype, "Zona1", void 0);
__decorate([
    Input()
], Zona1Component.prototype, "step", void 0);
__decorate([
    Output()
], Zona1Component.prototype, "zoneCompleted", void 0);
__decorate([
    ViewChild("childForm", { static: true })
], Zona1Component.prototype, "childForm", void 0);
Zona1Component = __decorate([
    Component({
        selector: 'app-zona1',
        templateUrl: './zona1.component.html',
        styleUrls: ['./zona1.component.css']
    })
], Zona1Component);
export { Zona1Component };
//# sourceMappingURL=zona1.component.js.map