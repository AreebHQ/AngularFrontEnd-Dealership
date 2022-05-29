import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'new-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  @Input() car: Car;




  constructor(private carservice:CarService) { }

  ngOnInit(): void {

  }

  


}
