import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Polita, Polite } from '../entities';
let PolitaComponent = class PolitaComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.p = new Polita();
    }
    ngOnInit() {
    }
    findPolita() {
        if (this.data.Numar.length >= 3) {
            var ps = new Polite();
            this.p = ps.findPolita(this.data.Numar);
            if (this.p != null)
                this.data = this.p;
        }
    }
    preluarePolita() {
        this.dialogRef.close(this.data);
    }
    onNoClick() {
        this.dialogRef.close(null);
    }
};
PolitaComponent = __decorate([
    Component({
        selector: 'app-polita',
        templateUrl: './polita.component.html',
        styleUrls: ['./polita.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], PolitaComponent);
export { PolitaComponent };
//# sourceMappingURL=polita.component.js.map