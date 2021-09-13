import { __decorate } from "tslib";
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, TariCarteVerde } from '../entities';
let Zona2Component = class Zona2Component {
    constructor() {
        this.zoneCompleted = new EventEmitter();
        this.imgMapEvent = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        this.newPosition = null;
        //this.Zona2 = new Zona2();
        this.Tari = new TariCarteVerde();
        this.TariTemp = new TariCarteVerde();
    }
    initAutocomplete() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById("Loc"), {
            types: ['address'],
            componentRestrictions: { 'country': ['RO'] },
            fields: ['address_components', 'geometry']
        });
        //this.autocomplete.addListener('place_changed', this.onPlaceChanged);
        this.autocomplete.addListener('place_changed', this.onPlaceChanged.bind(this));
    }
    autocompleteSetBounds() {
        if (this.newPosition != null) {
            this.autocomplete.setBounds(this.newPosition);
        }
    }
    onPlaceChanged() {
        var place = this.autocomplete.getPlace();
        if (!place.geometry) {
            //user didn't select a place
            document.getElementById("Loc").placeholder = "Selectati locatia";
        }
        else {
            //this.Zona2.Loc = place.formatted_address; //.adr_address;
            this.NewPlaceSelected = place;
        }
    }
    ngAfterViewInit() {
        this.initAutocomplete();
    }
    ngOnInit() {
        if (this.Zona2.Tara == null) {
            //this.filterText.setValue({name: 'ROMANIA'});
            this.Tara.control.value = this.Zona2.Tara = "ROMANIA";
            console.log(this.Tara.control.value, this.Zona2.Tara);
        }
    }
    showDiv(step, visibility) {
        if (this.childForm.valid) {
            this.Zona2.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.Zona2);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    filterItem(event) {
        if (!event) {
            this.Tari.Tari = this.TariTemp.Tari;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            //console.log(event);
            this.Tari.Tari = this.TariTemp.Tari.filter(a => a.Denumire.toLowerCase()
                .startsWith(event.toLowerCase()));
        }
    }
};
__decorate([
    ViewChild("childForm", { static: true })
], Zona2Component.prototype, "childForm", void 0);
__decorate([
    ViewChild("Tara", { static: true })
], Zona2Component.prototype, "Tara", void 0);
__decorate([
    Input()
], Zona2Component.prototype, "Zona2", void 0);
__decorate([
    Output()
], Zona2Component.prototype, "zoneCompleted", void 0);
__decorate([
    Output()
], Zona2Component.prototype, "imgMapEvent", void 0);
__decorate([
    Input()
], Zona2Component.prototype, "step", void 0);
Zona2Component = __decorate([
    Component({
        selector: 'app-zona2',
        templateUrl: './zona2.component.html',
        styleUrls: ['./zona2.component.css']
    })
], Zona2Component);
export { Zona2Component };
//# sourceMappingURL=zona2.component.js.map