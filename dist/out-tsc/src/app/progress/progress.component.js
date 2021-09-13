import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProgressComponent = class ProgressComponent {
    constructor() {
        this.progress = 0;
    }
    ngOnInit() { }
};
__decorate([
    Input()
], ProgressComponent.prototype, "progress", void 0);
ProgressComponent = __decorate([
    Component({
        selector: 'app-progress',
        templateUrl: './progress.component.html',
        styleUrls: ['./progress.component.css']
    })
], ProgressComponent);
export { ProgressComponent };
//# sourceMappingURL=progress.component.js.map