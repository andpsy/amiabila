import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let GDPRComponent = class GDPRComponent {
    constructor() {
        this.confirmed = new EventEmitter();
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], GDPRComponent.prototype, "GDPR", void 0);
__decorate([
    Output()
], GDPRComponent.prototype, "confirmed", void 0);
GDPRComponent = __decorate([
    Component({
        selector: 'app-gdpr',
        templateUrl: './gdpr.component.html',
        styleUrls: ['./gdpr.component.css']
    })
], GDPRComponent);
export { GDPRComponent };
//# sourceMappingURL=gdpr.component.js.map