import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, PagubaAuto, PagubaObiect } from '../entities';
let Zona4Component = class Zona4Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //this.Zona4 = new Zona4();
    }
    ngOnInit() {
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona4.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona4);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    existaPagubeAuto(event) {
        if (event) {
            var pa = new PagubaAuto();
            this.Zona4.Pagube.PagubeAuto.push(pa);
        }
        else {
            this.Zona4.Pagube.PagubeAuto = [];
        }
    }
    AddPagubaAuto() {
        if (this.Zona4.Pagube.PagubeAuto[this.Zona4.Pagube.PagubeAuto.length - 1].hasError())
            return;
        var newPA = new PagubaAuto();
        this.Zona4.Pagube.PagubeAuto.push(newPA);
    }
    RemovePagubaAuto(pa) {
        var index = this.Zona4.Pagube.PagubeAuto.indexOf(pa);
        if (index > -1)
            this.Zona4.Pagube.PagubeAuto.splice(index, 1);
    }
    existaPagubeObiecte(event) {
        if (event) {
            var po = new PagubaObiect();
            this.Zona4.Pagube.PagubeObiecte.push(po);
        }
        else {
            this.Zona4.Pagube.PagubeObiecte = [];
        }
    }
    AddPagubaObiect() {
        if (this.Zona4.Pagube.PagubeObiecte[this.Zona4.Pagube.PagubeObiecte.length - 1].hasError())
            return;
        var newPO = new PagubaObiect();
        this.Zona4.Pagube.PagubeObiecte.push(newPO);
    }
    RemovePagubaObiect(po) {
        var index = this.Zona4.Pagube.PagubeObiecte.indexOf(po);
        if (index > -1)
            this.Zona4.Pagube.PagubeObiecte.splice(index, 1);
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona4Component.prototype, "childForm", void 0);
__decorate([
    Input()
], Zona4Component.prototype, "Zona4", void 0);
__decorate([
    Output()
], Zona4Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona4Component.prototype, "step", void 0);
Zona4Component = __decorate([
    Component({
        selector: 'app-zona4',
        templateUrl: './zona4.component.html',
        styleUrls: ['./zona4.component.css']
    })
], Zona4Component);
export { Zona4Component };
//# sourceMappingURL=zona4.component.js.map