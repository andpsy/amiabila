import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, TariCarteVerde } from '../entities';
let Zona6Component = class Zona6Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona6 = new Zona6();
        this.Tari = new TariCarteVerde();
        this.TariTemp = new TariCarteVerde();
    }
    ngOnInit() {
        this.Tara.control.value = this.Zona6.Tara = "ROMANIA";
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona6.StepCompleted = true;
            this.zoneCompleted.emit(true);
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
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona6Component.prototype, "childForm", void 0);
__decorate([
    ViewChild("Tara", { static: true })
], Zona6Component.prototype, "Tara", void 0);
__decorate([
    Input()
], Zona6Component.prototype, "Zona6", void 0);
__decorate([
    Output()
], Zona6Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona6Component.prototype, "step", void 0);
Zona6Component = __decorate([
    Component({
        selector: 'app-zona6',
        templateUrl: './zona6.component.html',
        styleUrls: ['./zona6.component.css']
    })
], Zona6Component);
export { Zona6Component };
//# sourceMappingURL=zona6.component.js.map