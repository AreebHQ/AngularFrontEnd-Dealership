import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSearchResultComponent } from './admin-search-result/admin-search-result.component';
import { AdminAddNewVehicleComponent } from './admin-add-new-vehicle/admin-add-new-vehicle.component';
import { AdminEditVehicleComponent } from './admin-edit-vehicle/admin-edit-vehicle.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSearchHeaderComponent } from './admin-search-header/admin-search-header.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminSearchResultComponent,
    AdminAddNewVehicleComponent,
    AdminEditVehicleComponent,
    AdminSearchHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports:[

  ]
})
export class AdminModule { }
