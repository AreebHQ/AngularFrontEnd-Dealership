import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/car.service';
import { searchQuery } from 'src/app/CarSearchQueryModel';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  public car : Car;
  public cars : Car[] = [];
  editFormCollapsed : boolean = false;
  addFormCollapsed : boolean = false;

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

  public toggleEditFormCollapse()
  {
    this.editFormCollapsed = !this.editFormCollapsed;
  }

  public getSelectedCar(car: Car)
  {
    this.car = car;
    this.toggleEditFormCollapse();
  }

  public showAddVechileForm()
  {
    this.toggleEditFormCollapse();
    
    this.addFormCollapsed = !this.addFormCollapsed;
  }


}
