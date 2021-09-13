import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ConditiiComponent = class ConditiiComponent {
    constructor() {
        //public Conditii: boolean;
        this.confirmed = new EventEmitter();
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], ConditiiComponent.prototype, "Conditii", void 0);
__decorate([
    Output()
], ConditiiComponent.prototype, "confirmed", void 0);
ConditiiComponent = __decorate([
    Component({
        selector: 'app-conditii',
        templateUrl: './conditii.component.html',
        styleUrls: ['./conditii.component.css']
    })
], ConditiiComponent);
export { ConditiiComponent };
//# sourceMappingURL=conditii.component.js.map