import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
//import { Router } from '@angular/router';
import { RoutesRecognized } from '@angular/router';
import { CommonFunctions, Formular, Aditionale, GOOGLE_API_KEY, USE_FORM } from './entities';
import { DOCUMENT } from '@angular/common';
let AppComponent = class AppComponent {
    constructor(router, doc, mongoDbSrv, dialog) {
        this.router = router;
        this.doc = doc;
        this.mongoDbSrv = mongoDbSrv;
        this.dialog = dialog;
        this.title = 'amiabila';
        this.a = new Aditionale();
        this.CommonFunctions = CommonFunctions;
        this.use_form = USE_FORM;
        this.pas = 0;
        this._cale_parts = CommonFunctions._cale_parts;
    }
    ngOnInit() {
        this.router.events.subscribe(val => {
            if (val instanceof RoutesRecognized) {
                if (val.state.root.firstChild) {
                    if (val.state.root.firstChild.params.id)
                        this.externalGuid = val.state.root.firstChild.params.id;
                    if (val.state.root.firstChild.params.litera)
                        this.externalLetter = val.state.root.firstChild.params.litera;
                    this.getFormular();
                }
            }
        });
        this.setGTagManager();
        this.Formular = new Formular();
    }
    showDiv(step, visibility) {
        if (this.Formular.getPreviousZoneCompletedStatus(step)) {
            //this.CommonFunctions.step = step;
            //this.CommonFunctions.step = visibility ? step : null;
            CommonFunctions.showDiv(step, visibility);
        }
    }
    getDivId(step) {
        return CommonFunctions.Steps[step].DivId;
    }
    //refreshProgressBar(zoneCompleted:boolean):void{
    refreshProgressBar(zona) {
        var tmp = 0;
        for (var i = 0; i < CommonFunctions.Steps.length; i++) {
            if (CommonFunctions.Steps[i].Step == CommonFunctions.step && CommonFunctions.Steps[i].zona == zona.constructor.name) {
                if (CommonFunctions.Steps[i].vehicul != null) {
                    this.Formular["Vehicul" + CommonFunctions.Steps[i].vehicul][zona.constructor.name] = zona;
                    tmp += this.Formular["Vehicul" + CommonFunctions.Steps[i].vehicul][zona.constructor.name].StepCompleted ? 1 : 0;
                }
                else {
                    this.Formular[zona.constructor.name] = zona;
                    tmp += this.Formular[zona.constructor.name].StepCompleted ? 1 : 0;
                }
                break;
            }
        }
        this.nextStep(zona.constructor.name);
        /*
        if(this.CommonFunctions.step < 5 || this.CommonFunctions.step == 21 || this.CommonFunctions.step == 22)
          this.Formular[zona.constructor.name] = zona;
        else if(this.CommonFunctions.step >=5 && this.CommonFunctions.step <= 12)
          this.Formular.VehiculA[zona.constructor.name] = zona;
        else if(this.CommonFunctions.step >= 13 && this.CommonFunctions.step <= 20)
          this.Formular.VehiculB[zona.constructor.name] = zona;
        
        tmp += this.Formular.Zona1.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona2.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona3.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona4.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona5.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona6.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona7.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona8.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona9.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona10.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona11.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona14.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculA.Zona15.StepCompleted ? 1 : 0;
    
        tmp += this.Formular.VehiculB.Zona6.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona7.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona8.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona9.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona10.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona11.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona14.StepCompleted ? 1 : 0;
        tmp += this.Formular.VehiculB.Zona15.StepCompleted ? 1 : 0;
    
        tmp += this.Formular.Zona12.StepCompleted ? 1 : 0;
        tmp += this.Formular.Zona13.StepCompleted ? 1 : 0;
        */
        this.pas = Math.round(tmp / CommonFunctions.Steps.length * 100);
    }
    setGTagManager() {
        const s = this.doc.createElement('script');
        s.type = 'text/javascript';
        s.src = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_API_KEY + "&libraries=places";
        s.setAttribute('async', "true");
        s.setAttribute('defer', "true");
        const head = this.doc.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
    nextStep(zonaName) {
        /*
        this.mongoDbSrv.getData().subscribe(data=>{
          console.warn(data);
        });
        */
        this.mongoDbSrv
            .upsertFormular(this.Formular)
            .subscribe(formular => {
            //console.log(formular);
            //this.Formular = this.CommonFunctions.copyObj(formular, this.Formular); // nu merge uploadul
            if (formular.Id != null && this.Formular.Id == null)
                this.Formular.Id = formular.Id;
        });
    }
    getFormular() {
        this.mongoDbSrv
            .getFormular(this.externalGuid)
            .subscribe(formular => {
            this.Formular = this.CommonFunctions.copyObj(formular, this.Formular);
        });
    }
    populateFormularFromPolita(event, vehicul) {
        if (vehicul == 'A') {
            this.Formular.VehiculA.Polita = event;
            this.Formular.populateFormularFromPolita(vehicul);
        }
        else {
            this.Formular.VehiculB.Polita = event;
            this.Formular.populateFormularFromPolita(vehicul);
        }
        if (!this.use_form) {
            this.nextStep(null);
        }
    }
    filesUploaded(event) {
        //console.log(event);
        //console.warn(this.Formular);
        //this.Formular.Fisiere = event;
        this.nextStep(null);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __param(1, Inject(DOCUMENT))
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map