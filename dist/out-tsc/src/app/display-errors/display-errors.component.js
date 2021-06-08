import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { CommonFunctions } from '../entities';
let DisplayErrorsComponent = class DisplayErrorsComponent {
    constructor() {
        this.CommonFunctions = CommonFunctions;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DisplayErrorsComponent.prototype, "errors", void 0);
DisplayErrorsComponent = __decorate([
    Component({
        selector: 'app-display-errors',
        templateUrl: './display-errors.component.html',
        styleUrls: ['./display-errors.component.css']
    })
], DisplayErrorsComponent);
export { DisplayErrorsComponent };
//# sourceMappingURL=display-errors.component.js.map