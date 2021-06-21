import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CommonFunctions, Marker, Zona2 } from '../entities';
import { GoogleMap } from '@angular/google-maps'


@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  @Input() Zona2: Zona2;  
	@Output() newItemEvent = new EventEmitter<string>();
	@Output() imgMapEvent = new EventEmitter<string>();
	@ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  public CommonFunctions = CommonFunctions;  
  //public adresa:string;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 25,
    minZoom: 8,
	};
	public marker = new Marker();
	public m:google.maps.Marker;

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
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

  getAddress(){
	  const geocoder = new google.maps.Geocoder();		  
		//const infowindow = new google.maps.InfoWindow();

  	//console.log(this.marker.position);
		geocoder.geocode({ location: {'lat':this.marker.position.lat, 'lng':this.marker.position.lng} }, (results, status) => 
		{
	    if (status === "OK") 
	    {
	      if (results[0]) 
	      {
	      	this.newItemEvent.emit(results[0].formatted_address);
	      	//console.log('adresa: ' + this.adresa);
	        //infowindow.setContent(results[0].formatted_address);
	        //infowindow.open(this.map, this.marker);
	        this.exportMapImg();
	      } else {
	        window.alert("No results found");
	      }
	    } else {
	      window.alert("Geocoder failed due to: " + status);
	    }
	  });
	}

  mapClick(event: google.maps.MouseEvent) {
    //console.log(event)
    this.marker.position.lat = event.latLng.toJSON().lat;
    this.marker.position.lng = event.latLng.toJSON().lng;
    //console.log(event.latLng.toJSON());
    this.m.setPosition(event.latLng);
    this.center = {
      lat: this.marker.position.lat,
      lng: this.marker.position.lng,
    }
    this.getAddress();
  }

	exportMapImg() {
	  var staticMapUrl = this.center.lat + "," + this.center.lng;
    //console.warn(staticMapUrl);
  	this.imgMapEvent.emit(staticMapUrl);
	}  
}
