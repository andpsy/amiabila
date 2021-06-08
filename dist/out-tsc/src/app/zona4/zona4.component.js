import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let Zona4Component = class Zona4Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona4 = new Zona4();
    }
    ngOnInit() {
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona4.StepCompleted = true;
            this.zoneCompleted.emit(true);
        }
        CommonFunctions.showDiv(step, visibility);
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona4Component.prototype, "childForm", void 0);
__decorate([
    Input()
], Zona4Component.prototype, "Zona4", void 0);
__decorate([
    Output()
], Zona4Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona4Component.prototype, "step", void 0);
Zona4Component = __decorate([
    Component({
        selector: 'app-zona4',
        templateUrl: './zona4.component.html',
        styleUrls: ['./zona4.component.css']
    })
], Zona4Component);
export { Zona4Component };
//# sourceMappingURL=zona4.component.js.map