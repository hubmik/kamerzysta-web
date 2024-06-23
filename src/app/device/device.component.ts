import { Component, OnInit } from '@angular/core';
import { Device, DeviceService } from '../device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  cameras: Device[] = [];
  col1: Device[] = [];
  col2: Device[] = [];
  col3: Device[] = [];
  col4: Device[] = [];

  constructor(private deviceService: DeviceService){}
  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(data =>{
      this.cameras = data;
      console.log(this.cameras);
      this.groupCameras();
    });
  }

  groupCameras(): void{
    this.cameras.forEach(camera => {
      if(camera.number % 3 === 0 && camera.number % 5 === 0){
        this.col3.push(camera);
      }else if(camera.number % 3 === 0){
        this.col1.push(camera);
      }else if(camera.number % 5 === 0){
        this.col2.push(camera);
      }else{
        this.col4.push(camera);
      }
    });
  }  
}
