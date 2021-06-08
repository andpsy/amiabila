import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, Martor } from '../entities';
let Zona5Component = class Zona5Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona5 = new Zona5();
    }
    ngOnInit() {
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona5.StepCompleted = true;
            this.zoneCompleted.emit(true);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    AddMartor() {
        var newMartor = new Martor();
        this.Zona5.Martori.push(newMartor);
    }
    RemoveMartor(martor) {
        var index = this.Zona5.Martori.indexOf(martor);
        if (index > -1)
            this.Zona5.Martori.splice(index, 1);
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona5Component.prototype, "childForm", void 0);
__decorate([
    Input()
], Zona5Component.prototype, "Zona5", void 0);
__decorate([
    Output()
], Zona5Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona5Component.prototype, "step", void 0);
Zona5Component = __decorate([
    Component({
        selector: 'app-zona5',
        templateUrl: './zona5.component.html',
        styleUrls: ['./zona5.component.css']
    })
], Zona5Component);
export { Zona5Component };
//# sourceMappingURL=zona5.component.js.map