import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewInventoryRoutingModule } from './new-inventory-routing.module';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { HomeComponent } from './new-invnetory-home/home.component';
import { NewInventorySearchResultComponent } from './new-inventory-search-result/new-inventory-search-result.component';


@NgModule({
  declarations: [
    VehicleDetailComponent,
    SearchHeaderComponent,
    HomeComponent,
    NewInventorySearchResultComponent
  ],
  imports: [
    CommonModule,
    NewInventoryRoutingModule,
    FormsModule
  ]
})
export class NewInventoryModule { }
