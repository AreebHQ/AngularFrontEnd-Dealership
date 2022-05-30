import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';

@Component({
  selector: 'used-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  @Input() car: Car;
  constructor() { }

  ngOnInit(): void {
  }

}
