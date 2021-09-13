import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { CommonFunctions } from '../entities';
let PagubaAutoComponent = class PagubaAutoComponent {
    constructor() {
        this.CommonFunctions = CommonFunctions;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], PagubaAutoComponent.prototype, "PagubaAuto", void 0);
PagubaAutoComponent = __decorate([
    Component({
        selector: 'app-paguba-auto',
        templateUrl: './paguba-auto.component.html',
        styleUrls: ['./paguba-auto.component.css']
    })
], PagubaAutoComponent);
export { PagubaAutoComponent };
//# sourceMappingURL=paguba-auto.component.js.map