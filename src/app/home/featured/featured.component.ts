import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {


  public cars: Car[] =[];

  constructor(private carservice: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  public getCars():void {
    this.carservice.getCars().subscribe(
      (response:Car[]) => {
        this.cars = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
