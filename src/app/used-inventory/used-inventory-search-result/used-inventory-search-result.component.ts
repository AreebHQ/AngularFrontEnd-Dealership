import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { UsedInventoryComponent } from '../used-inventory.component';

@Component({
  selector: 'app-used-inventory-search-result',
  templateUrl: './used-inventory-search-result.component.html',
  styleUrls: ['./used-inventory-search-result.component.css']
})
export class UsedInventorySearchResultComponent implements OnInit {
  @Input() car:Car;

      //variable to hold selected car
      selectedCar : Car;

   //geting selected car from html template
   onSelect(car: Car){
    this.selectedCar = car;
    //calling toggleCollapse mrthod and passing car selected from html template
    this.toggleCollapse(car);
}

  constructor(private homeToggle : UsedInventoryComponent) { }

  ngOnInit(): void {
  }


  //fnction to call toggle from other component
  public toggleCollapse(car:Car)
  {
    //calling getSelectedCar method from Home Component 
    this.homeToggle.getSelectedCar(car);
 
  }

}
