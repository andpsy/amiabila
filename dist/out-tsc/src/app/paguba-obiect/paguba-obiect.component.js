import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { CommonFunctions } from '../entities';
let PagubaObiectComponent = class PagubaObiectComponent {
    constructor() {
        this.CommonFunctions = CommonFunctions;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], PagubaObiectComponent.prototype, "PagubaObiect", void 0);
PagubaObiectComponent = __decorate([
    Component({
        selector: 'app-paguba-obiect',
        templateUrl: './paguba-obiect.component.html',
        styleUrls: ['./paguba-obiect.component.css']
    })
], PagubaObiectComponent);
export { PagubaObiectComponent };
//# sourceMappingURL=paguba-obiect.component.js.map