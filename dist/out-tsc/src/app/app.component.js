import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonFunctions, Formular } from './entities';
let AppComponent = class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.title = 'amiabila';
        this.CommonFunctions = CommonFunctions;
        this.pas = 0;
        this.Formular = new Formular();
        this._cale_parts = CommonFunctions._cale_parts;
    }
    ngOnInit() {
    }
    showDiv(step, visibility) {
        if (this.Formular.getPreviousZoneCompletedStatus(step))
            CommonFunctions.showDiv(step, visibility);
    }
    getDivId(step) {
        return CommonFunctions.Steps[step].DivId;
    }
    refreshProgressBar(zoneCompleted) {
        var tmp = 0;
        tmp += this.Formular.Zona1.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona2.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona3.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona4.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona5.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona6.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona7.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona8.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona9.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona10.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona11.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona14.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona15.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona6.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona7.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona8.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona9.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona10.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona11.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona14.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona15.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona12.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona13.StepCompleted ? 1 : 0;
        this.pas = Math.round(tmp / 22 * 100);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map