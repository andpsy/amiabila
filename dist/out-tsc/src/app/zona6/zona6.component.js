import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, TariCarteVerde, USE_FORM } from '../entities';
import { PolitaComponent } from '../polita/polita.component';
let Zona6Component = class Zona6Component {
    constructor(dialog) {
        this.dialog = dialog;
        this.zoneCompleted = new EventEmitter();
        this.politaFound = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        this.use_form = USE_FORM;
        this.zonashow = null;
        this.icon = null;
        //this.Zona6 = new Zona6();
        this.Tari = new TariCarteVerde();
        this.TariTemp = new TariCarteVerde();
    }
    ngOnInit() {
        this.zonashow = this.step == 25 ? true : false;
        this.icon = this.step == 25 ? 'expand_less' : 'expand_more';
        this.Tara.control.value = this.Zona6.Tara = "ROMANIA";
    }
    ngAfterViewInit() {
        if ((this.use_form || (!this.use_form && this.zonashow)) && (this.checkPolita()))
            this.openPolitaDialog();
    }
    checkPolita() {
        return this.Polita == null || Object.keys(this.Polita).length == 0;
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona6.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona6);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    filterItem(event) {
        if (!event) {
            this.Tari.Tari = this.TariTemp.Tari;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            console.log(event);
            this.Tari.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                .startsWith(event.toLowerCase()));
        }
    }
    openPolitaDialog() {
        const dialogRef = this.dialog.open(PolitaComponent, {
            maxWidth: '80vw !important',
            minWidth: '80vw !important',
            width: '80vw !important',
            maxHeight: '300px !important',
            minHeight: '300px !important',
            height: '300px !important',
            disableClose: true,
            data: this.Polita
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log(result);
            if (result != null)
                this.politaFound.emit(result);
        });
    }
    changeZona() {
        this.zonashow = !this.zonashow;
        this.icon = !this.zonashow ? 'expand_more' : 'expand_less';
        this.ngAfterViewInit();
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona6Component.prototype, "childForm", void 0);
__decorate([
    ViewChild("Tara", { static: true })
], Zona6Component.prototype, "Tara", void 0);
__decorate([
    Input()
], Zona6Component.prototype, "Zona6", void 0);
__decorate([
    Input()
], Zona6Component.prototype, "Polita", void 0);
__decorate([
    Output()
], Zona6Component.prototype, "zoneCompleted", void 0);
__decorate([
    Output()
], Zona6Component.prototype, "politaFound", void 0);
__decorate([
    Input()
], Zona6Component.prototype, "step", void 0);
Zona6Component = __decorate([
    Component({
        selector: 'app-zona6',
        templateUrl: './zona6.component.html',
        styleUrls: ['./zona6.component.css']
    })
], Zona6Component);
export { Zona6Component };
//# sourceMappingURL=zona6.component.js.map