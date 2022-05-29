import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/car.service';
import { searchQuery } from 'src/app/CarSearchQueryModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  car : Car;
  isCollapsed: boolean = false;

  public cars : Car[] = [];

 constructor(private carservice:CarService) { }

 ngOnInit(): void {
   this.getNewCars();
 }

 public getNewCars():void{
   this.carservice.getNewCars().subscribe(
     (response:Car[])=>{this.cars = response;},
     (error:HttpErrorResponse)=>{alert(error.message);}
   );
 } 

public getSearchResult(query:searchQuery)
{
  console.log("search query from home compnenet.");
  console.log(query);
  this.carservice.newInventorySearch(query).subscribe(
    (response:Car[])=>{this.cars = response;},
    (error:HttpErrorResponse)=>{alert(error.message);}
  );
}

  toggleCollapse()
  {
    this.isCollapsed = !this.isCollapsed;
  }

  getSelectedCar(car: Car)
  {
    this.car = car;
    this.toggleCollapse();
  }




}
