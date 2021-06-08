import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let Zona15Component = class Zona15Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona15 = new Zona15();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.resizeSignaturePad(null);
    }
    resizeSignaturePad(event) {
        //this.signaturePad.set('canvasWidth', this.signatureContainer.nativeElement.clientWidth);
        this.signaturePad.queryPad()._canvas.width = this.signatureContainer.nativeElement.clientWidth;
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona15.StepCompleted = true;
            this.zoneCompleted.emit(true);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    clearCanvas() {
        this.signaturePad.clear();
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona15Component.prototype, "childForm", void 0);
__decorate([
    ViewChild('signatureContainer', { static: true })
], Zona15Component.prototype, "signatureContainer", void 0);
__decorate([
    ViewChild('signaturePad', { static: true })
], Zona15Component.prototype, "signaturePad", void 0);
__decorate([
    Input()
], Zona15Component.prototype, "Zona15", void 0);
__decorate([
    Output()
], Zona15Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona15Component.prototype, "step", void 0);
Zona15Component = __decorate([
    Component({
        selector: 'app-zona15',
        templateUrl: './zona15.component.html',
        styleUrls: ['./zona15.component.css']
    })
], Zona15Component);
export { Zona15Component };
//# sourceMappingURL=zona15.component.js.map