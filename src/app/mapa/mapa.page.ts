import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Geolocation, GeolocationPermissionType, PermissionStatus } from '@capacitor/geolocation';

import * as L from 'leaflet'; // Importa la biblioteca Leaflet




@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map!: L.Map;

  constructor(private router:Router, private activatedRouter: ActivatedRoute) {

   }

  public user = {
    usuario: "",
    password: ""
  }

  


  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.usuario = state['user'].usuario;
        this.user.password = state['user'].password;
        console.log(this.user);

      }


    })
  }
 //map=19/-33.43308/-70.61519
  ionViewDidEnter() {
    // Configura un mapa de Leaflet con OpenStreetMap
    this.map = L.map('map').setView([-33.43308,-70.61519],20); // Latitud y longitud iniciales

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Añade un marcador al mapa (ejemplo)
    L.marker([-33.43308,-70.61519]).addTo(this.map).bindPopup('¡Estas aqui!').openPopup();
  }

  isGeolocationPermissionGranted(permissions: GeolocationPermissionType | PermissionStatus): boolean {
    return (permissions as string) === 'granted';
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Ubicación actual:', coordinates);
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
    }
  }
}