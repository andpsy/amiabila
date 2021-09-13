import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let TermeniSiConditiiComponent = class TermeniSiConditiiComponent {
    constructor() {
        this.confirmed = new EventEmitter();
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], TermeniSiConditiiComponent.prototype, "TermeniSiConditii", void 0);
__decorate([
    Output()
], TermeniSiConditiiComponent.prototype, "confirmed", void 0);
TermeniSiConditiiComponent = __decorate([
    Component({
        selector: 'app-termeni-si-conditii',
        templateUrl: './termeni-si-conditii.component.html',
        styleUrls: ['./termeni-si-conditii.component.css']
    })
], TermeniSiConditiiComponent);
export { TermeniSiConditiiComponent };
//# sourceMappingURL=termeni-si-conditii.component.js.map