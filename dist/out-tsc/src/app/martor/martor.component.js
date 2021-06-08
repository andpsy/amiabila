import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { CommonFunctions } from '../entities';
let MartorComponent = class MartorComponent {
    constructor() {
        this.CommonFunctions = CommonFunctions;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], MartorComponent.prototype, "martor", void 0);
MartorComponent = __decorate([
    Component({
        selector: 'app-martor',
        templateUrl: './martor.component.html',
        styleUrls: ['./martor.component.css']
    })
], MartorComponent);
export { MartorComponent };
//# sourceMappingURL=martor.component.js.map