import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { HomeComponent } from '../new-invnetory-home/home.component';

@Component({
  selector: 'app-new-inventory-search-result',
  templateUrl: './new-inventory-search-result.component.html',
  styleUrls: ['./new-inventory-search-result.component.css']
})
export class NewInventorySearchResultComponent implements OnInit {

    @Input() car:Car;

    //variable to hold selected car
    selectedCar : Car;

    //geting selected car from html template
    onSelect(car: Car){
        this.selectedCar = car;
        //calling toggleCollapse mrthod and passing car selected from html template
        this.toggleCollapse(car);
    }

  //initializing homeComponent onject to use methods on home component 
  constructor(private homeToggle : HomeComponent) { }
  ngOnInit(): void { }

  //fnction to call toggle from other component
  public toggleCollapse(car:Car)
  {
    //calling getSelectedCar method from Home Component 
    this.homeToggle.getSelectedCar(car);
 
  }

}
