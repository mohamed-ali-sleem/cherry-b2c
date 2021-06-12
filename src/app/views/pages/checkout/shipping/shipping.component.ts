import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    zoom: 5,
    center: new google.maps.LatLng(39.639537564366684, -101.77734375),
    mapTypeControl: false,
    scaleControl: false,
    panControl: false,
    streetViewControl: false,
    styles: [
      {
        featureType: 'administrative.land_parcel',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }, { lightness: 20 }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ hue: '#f49935' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ hue: '#fad959' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{ visibility: 'simplified' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [{ hue: '#a1cdfc' }, { saturation: 30 }, { lightness: 49 }],
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
