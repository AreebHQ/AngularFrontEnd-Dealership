import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';
import { searchQuery } from '../CarSearchQueryModel';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public car : Car;
  public cars : Car[] = [];
  isCollapsed: boolean = false;

  constructor(private carservice : CarService) { }




  ngOnInit(): void {
    this.getAllVehicles();
  }

  public getAllVehicles()
  {
    this.carservice.getAllAvaiableVehicles().subscribe(
      (response:Car[])=>{this.cars = response;},
      (error:HttpErrorResponse)=>{alert(error.message);}
      
    );
  }

  public getSearchResult(query : searchQuery) {
    this.carservice.availableVehiclesSearch(query).subscribe(
      (response:Car[])=>{this.cars = response},
      (error:HttpErrorResponse)=>{alert(console.error);}
    );
  }

  public toggleCollapse()
  {
    this.isCollapsed = !this.isCollapsed;
  }

  public getSelectedCar(car: Car)
  {
    this.car = car;
    this.toggleCollapse();
  }


}
