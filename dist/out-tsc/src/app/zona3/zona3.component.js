import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
import { VatamariComponent } from '../vatamari/vatamari.component';
let Zona3Component = class Zona3Component {
    constructor(dialog) {
        this.dialog = dialog;
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona3 = new Zona3();
    }
    ngOnInit() {
    }
    chkBoxChange() {
        if (this.Zona3.VatamariDa) {
            this.open112Dialog();
        }
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona3.StepCompleted = true;
            this.zoneCompleted.emit(true);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    open112Dialog() {
        const dialogRef = this.dialog.open(VatamariComponent, {
            /*
            maxWidth: '95vw !important',
            minWidth: '95vw !important',
            width: '95vw !important',
            */
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            this.Zona3.Confirma112 = result;
            console.log('The dialog was closed');
        });
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona3Component.prototype, "childForm", void 0);
__decorate([
    Input()
], Zona3Component.prototype, "Zona3", void 0);
__decorate([
    Output()
], Zona3Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona3Component.prototype, "step", void 0);
Zona3Component = __decorate([
    Component({
        selector: 'app-zona3',
        templateUrl: './zona3.component.html',
        styleUrls: ['./zona3.component.css']
    })
], Zona3Component);
export { Zona3Component };
//# sourceMappingURL=zona3.component.js.map