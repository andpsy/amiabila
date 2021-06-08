import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let Zona14Component = class Zona14Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        //this.Zona14 = new Zona14();
    }
    ngOnInit() {
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona14.StepCompleted = true;
            this.zoneCompleted.emit(true);
        }
        CommonFunctions.showDiv(step, visibility);
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona14Component.prototype, "childForm", void 0);
__decorate([
    Input()
], Zona14Component.prototype, "Zona14", void 0);
__decorate([
    Output()
], Zona14Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona14Component.prototype, "step", void 0);
Zona14Component = __decorate([
    Component({
        selector: 'app-zona14',
        templateUrl: './zona14.component.html',
        styleUrls: ['./zona14.component.css']
    })
], Zona14Component);
export { Zona14Component };
//# sourceMappingURL=zona14.component.js.map