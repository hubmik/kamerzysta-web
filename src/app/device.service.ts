import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Device{
  number: number;
  fullName: string;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private url = 'https://localhost:7091/camera/';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]>{
    return this.http.get<Device[]>(`${this.url}getAllDevices`)
  }
}
