import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let DocumenteNecesareComponent = class DocumenteNecesareComponent {
    constructor() {
        this.confirmed = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DocumenteNecesareComponent.prototype, "DocumenteNecesare", void 0);
__decorate([
    Output()
], DocumenteNecesareComponent.prototype, "confirmed", void 0);
DocumenteNecesareComponent = __decorate([
    Component({
        selector: 'app-documente-necesare',
        templateUrl: './documente-necesare.component.html',
        styleUrls: ['./documente-necesare.component.css']
    })
], DocumenteNecesareComponent);
export { DocumenteNecesareComponent };
//# sourceMappingURL=documente-necesare.component.js.map