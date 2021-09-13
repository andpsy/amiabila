import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let PrerequisitesComponent = class PrerequisitesComponent {
    constructor() {
        this.confirmed = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], PrerequisitesComponent.prototype, "a", void 0);
__decorate([
    Output()
], PrerequisitesComponent.prototype, "confirmed", void 0);
PrerequisitesComponent = __decorate([
    Component({
        selector: 'app-prerequisites',
        templateUrl: './prerequisites.component.html',
        styleUrls: ['./prerequisites.component.css']
    })
], PrerequisitesComponent);
export { PrerequisitesComponent };
//# sourceMappingURL=prerequisites.component.js.map