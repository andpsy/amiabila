import { __decorate } from "tslib";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions } from '../entities';
let Zona11Component = class Zona11Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        //this.Zona11 = new Zona11();
    }
    ngOnInit() {
        //this.Zona11.Pagube.push("");
        //this.Zona11.Pagube = ["111","222"];
        this.newPaguba = "";
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona11.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona11);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    addPaguba() {
        if (!this.CommonFunctions.isNullOrWhiteSpaces(this.newPaguba) && this.Zona11.Pagube.indexOf(this.newPaguba) < 0) {
            this.Zona11.Pagube.push(this.newPaguba);
            this.newPaguba = "";
        }
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value && this.Zona11.Pagube.indexOf(value) < 0) {
            this.Zona11.Pagube.push(value);
        }
        // Clear the input value
        //event.chipInput!.clear();
        event.input.value = "";
        event.input.focus();
    }
    remove(p) {
        const index = this.Zona11.Pagube.indexOf(p);
        if (index >= 0) {
            this.Zona11.Pagube.splice(index, 1);
            var initId = '#' + p.split(' ').join('-');
            var td = document.querySelector(initId);
            if (td)
                td.style.backgroundColor = "transparent";
        }
    }
    getId(event) {
        //console.log(event.srcElement.id);
        this.newPaguba = event.srcElement.id.split('-').join(' ').replace("1", "").replace("2", "");
        this.addPaguba();
        event.srcElement.style.backgroundColor = "red";
    }
    getText(event) {
        this.curTooltip = event.srcElement.id.split('-').join(' ').replace("1", "").replace("2", "");
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona11Component.prototype, "childForm", void 0);
__decorate([
    Input()
], Zona11Component.prototype, "Zona11", void 0);
__decorate([
    Input()
], Zona11Component.prototype, "tipVehicul", void 0);
__decorate([
    Output()
], Zona11Component.prototype, "zoneCompleted", void 0);
__decorate([
    Input()
], Zona11Component.prototype, "step", void 0);
Zona11Component = __decorate([
    Component({
        selector: 'app-zona11',
        templateUrl: './zona11.component.html',
        styleUrls: ['./zona11.component.css']
    })
], Zona11Component);
export { Zona11Component };
//# sourceMappingURL=zona11.component.js.map