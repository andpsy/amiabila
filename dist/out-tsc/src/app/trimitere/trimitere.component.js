import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { CommonFunctions, USE_FORM } from '../entities';
let TrimitereComponent = class TrimitereComponent {
    constructor(mongoDbSrv) {
        this.mongoDbSrv = mongoDbSrv;
        this.CommonFunctions = CommonFunctions;
        this.use_form = USE_FORM;
        this.zonashow = null;
        this.icon = null;
    }
    ngOnInit() {
        this.zonashow = this.step == 25 ? true : false;
        this.icon = this.step == 25 ? 'expand_less' : 'expand_more';
        this.Formular.Utilizatori[0].Email = this.Formular.VehiculA.Zona6.Email;
        this.Formular.Utilizatori[0].Telefon = this.Formular.VehiculA.Zona6.Telefon;
        this.Formular.Utilizatori[0].Litera = "A";
        this.Formular.Utilizatori[1].Email = this.Formular.VehiculB.Zona6.Email;
        this.Formular.Utilizatori[1].Telefon = this.Formular.VehiculB.Zona6.Telefon;
        this.Formular.Utilizatori[1].Litera = "B";
    }
    ngAfterViewInit() {
    }
    changeZona() {
        this.zonashow = !this.zonashow;
        this.icon = !this.zonashow ? 'expand_more' : 'expand_less';
        this.ngAfterViewInit();
    }
    Trimite() {
        console.log('aici');
        var url = this.CommonFunctions.SRV_URL + 'Users/SendFirstEmail';
        this.mongoDbSrv
            .genericPost(url, this.Formular)
            .subscribe(response => {
            console.log(response);
        });
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], TrimitereComponent.prototype, "childForm", void 0);
__decorate([
    Input()
], TrimitereComponent.prototype, "Formular", void 0);
__decorate([
    Input()
], TrimitereComponent.prototype, "step", void 0);
TrimitereComponent = __decorate([
    Component({
        selector: 'app-trimitere',
        templateUrl: './trimitere.component.html',
        styleUrls: ['./trimitere.component.css']
    })
], TrimitereComponent);
export { TrimitereComponent };
//# sourceMappingURL=trimitere.component.js.map