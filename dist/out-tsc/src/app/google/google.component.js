import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CommonFunctions, Marker } from '../entities';
import { GoogleMap } from '@angular/google-maps';
let GoogleComponent = class GoogleComponent {
    constructor() {
        this.newItemEvent = new EventEmitter();
        this.imgMapEvent = new EventEmitter();
        this.newPositionSelectedEvent = new EventEmitter();
        this.CommonFunctions = CommonFunctions;
        //public adresa:string;
        this.zoom = 12;
        this.options = {
            mapTypeId: 'roadmap',
            zoomControl: true,
            scrollwheel: true,
            disableDoubleClickZoom: true,
            maxZoom: 25,
            minZoom: 8,
        };
        this.marker = new Marker();
    }
    ngOnInit() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            this.marker = {
                position: {
                    lat: this.center.lat,
                    lng: this.center.lng,
                },
                label: {
                    color: 'red',
                    text: 'Locatia dumneavoastra',
                },
                title: 'Locatia dumneavoastra',
                options: { animation: google.maps.Animation.BOUNCE },
            };
            this.m = new google.maps.Marker(this.marker);
            this.m.setMap(this.map.googleMap);
            this.getAddress();
        });
    }
    ngOnChanges(changes) {
        if (changes.NewPlaceSelected.currentValue) {
            var place = changes.NewPlaceSelected.currentValue.geometry.location;
            this.marker.position.lat = place.lat();
            this.marker.position.lng = place.lng();
            this.center = { lat: place.lat(), lng: place.lng() };
            //this.map.panTo(new google.maps.LatLng(place.lat(), place.lng()));
            this.m.setPosition(new google.maps.LatLng(place.lat(), place.lng()));
            this.exportMapImg();
        }
    }
    getAddress() {
        this.newPositionSelectedEvent.emit(new google.maps.LatLngBounds(this.center));
        const geocoder = new google.maps.Geocoder();
        //const infowindow = new google.maps.InfoWindow();
        geocoder.geocode({ location: { 'lat': this.marker.position.lat, 'lng': this.marker.position.lng } }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    this.newItemEvent.emit(results[0].formatted_address);
                    //infowindow.setContent(results[0].formatted_address);
                    //infowindow.open(this.map, this.marker);
                    this.exportMapImg();
                }
                else {
                    window.alert("No results found");
                }
            }
            else {
                window.alert("Geocoder failed due to: " + status);
            }
        });
    }
    mapClick(event) {
        this.marker.position.lat = event.latLng.toJSON().lat;
        this.marker.position.lng = event.latLng.toJSON().lng;
        this.m.setPosition(event.latLng);
        this.center = {
            lat: this.marker.position.lat,
            lng: this.marker.position.lng,
        };
        this.getAddress();
    }
    exportMapImg() {
        var staticMapUrl = this.center.lat + "," + this.center.lng;
        this.imgMapEvent.emit(staticMapUrl);
    }
};
__decorate([
    Input()
], GoogleComponent.prototype, "Zona2", void 0);
__decorate([
    Input()
], GoogleComponent.prototype, "NewPlaceSelected", void 0);
__decorate([
    Output()
], GoogleComponent.prototype, "newItemEvent", void 0);
__decorate([
    Output()
], GoogleComponent.prototype, "imgMapEvent", void 0);
__decorate([
    Output()
], GoogleComponent.prototype, "newPositionSelectedEvent", void 0);
__decorate([
    ViewChild(GoogleMap, { static: false })
], GoogleComponent.prototype, "map", void 0);
GoogleComponent = __decorate([
    Component({
        selector: 'app-google',
        templateUrl: './google.component.html',
        styleUrls: ['./google.component.css']
    })
], GoogleComponent);
export { GoogleComponent };
//# sourceMappingURL=google.component.js.map