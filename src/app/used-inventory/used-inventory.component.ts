import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';
import { searchQuery } from '../CarSearchQueryModel';

@Component({
  selector: 'app-used-inventory',
  templateUrl: './used-inventory.component.html',
  styleUrls: ['./used-inventory.component.css']
})
export class UsedInventoryComponent implements OnInit {

  car : Car;
  isCollapsed: boolean = false;

  public cars : Car[] = [];

 constructor(private carservice:CarService) { }

 ngOnInit(): void {
   this.getUsedCars();
 }

 public getUsedCars():void{
   this.carservice.getUsedCars().subscribe(
     (response:Car[])=>{this.cars = response;},
     (error:HttpErrorResponse)=>{alert(error.message);}
   );
 } 

public getSearchResult(query:searchQuery)
{
  this.carservice.usedInventorySearch(query).subscribe(
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
