import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DeviceService, Device } from '../device.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: L.Map | undefined;

  constructor(private service: DeviceService) { }

  ngOnInit(): void {
    this.initMap();
    //this.loadCameraData();
  }

  private initMap(): void {
    this.map = L.map('map').setView([52.093421, 5.118278], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    const markers = [
      { name: 'Camera 1', latitude: 52.093421, longitude: 5.118278 },
      { name: 'Camera 2', latitude: 52.093448, longitude: 5.118536 },
      // Add more markers as needed
    ];

    markers.forEach(marker => {
      L.marker([marker.latitude, marker.longitude])
        .addTo(this.map!)
        .bindPopup(marker.name);
    });
  }

  /*private loadCameraData(): void {
    this.service.getDevices().subscribe(data => {
      data.forEach(camera => {
        if (this.map) {
          L.marker([camera.latitude, camera.longitude]).addTo(this.map)
            .bindPopup(`<b>${camera.fullName}</b><br>Latitude: ${camera.latitude}<br>Longitude: ${camera.longitude}`);
        }
      });
    });
  }*/
}