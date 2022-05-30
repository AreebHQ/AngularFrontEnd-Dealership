import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { SalesComponent } from '../sales.component';

@Component({
  selector: 'app-sales-search-result',
  templateUrl: './sales-search-result.component.html',
  styleUrls: ['./sales-search-result.component.css']
})
export class SalesSearchResultComponent implements OnInit {

  @Input() car : Car;

  //variable to hold selected car
  selectedCar : Car;

  constructor(private homeToggle : SalesComponent) { }

  ngOnInit(): void {
  }


  //geting selected car from html template
  onSelect(car: Car): void{
    this.selectedCar = car;
    //calling toggleCollapse mrthod and passing car selected from html template
    this.toggleCollapse(car);
  }

  
  //fnction to call toggle from other component
  public toggleCollapse(car:Car)
  {
    //calling getSelectedCar method from Home Component 
    this.homeToggle.getSelectedCar(car);
 
  }

}
