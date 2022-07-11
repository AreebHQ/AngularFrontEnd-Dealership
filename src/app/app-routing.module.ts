import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddNewVehicleComponent } from './admin/admin-add-new-vehicle/admin-add-new-vehicle.component';
import { AdminEditVehicleComponent } from './admin/admin-edit-vehicle/admin-edit-vehicle.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminSearchHeaderComponent } from './admin/admin-search-header/admin-search-header.component';
import { AdminSearchResultComponent } from './admin/admin-search-result/admin-search-result.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './new-inventory/new-invnetory-home/home.component';
import { SearchHeaderComponent } from './new-inventory/search-header/search-header.component';
import { VehicleDetailComponent } from './new-inventory/vehicle-detail/vehicle-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PurchaseComponent } from './sales/purchase/purchase.component';
import { SalesSearchResultComponent } from './sales/sales-search-result/sales-search-result.component';
import { SalesComponent } from './sales/sales.component';
import { SpecialsComponent } from './specials/specials.component';
import { UsedInventoryComponent } from './used-inventory/used-inventory.component';
import { UsersHomeComponent } from './users/users-home/users-home.component';

const routes: Routes = [
  {path: ``, redirectTo: `/login`, pathMatch: `full`},
  {path: `home`, component: FeaturedComponent},
  {path: `newInventory`, component: HomeComponent,
  children: [
    {path: ``, redirectTo: `/newInventory`, pathMatch: `full`},
    {path: `searchHeader`, component: SearchHeaderComponent},
    {path: `vehicleDetail`, component: VehicleDetailComponent},
    {path: `**`, redirectTo: `newInventory`, pathMatch: `full`}]
  },
  {path: `usedInventory`, component: UsedInventoryComponent, 
  children: [
    {path: `vehicleDetail` , component: VehicleDetailComponent},
    {path: `**`, redirectTo: `usedInventory`, pathMatch: `full`}
  ]},
  {path: `contactUs` , component: ContactUsComponent},
  {path: `specials` , component: SpecialsComponent},
  {path: `sales` , component: SalesComponent,
  children: [
    {path:`purchase`, component:PurchaseComponent},
    {path:`salesSearchResult`, component:SalesSearchResultComponent},
    {path: `**`, redirectTo: `sales`, pathMatch: `full`}
  ]},
  {path: `admin`, component: AdminHomeComponent,
  children: [
    {path: `editVehicle` , component: AdminEditVehicleComponent},
    {path: `searchHeader` , component: AdminSearchHeaderComponent},
    {path: `addVehicle` , component: AdminAddNewVehicleComponent},
    {path: `searchResult` , component: AdminSearchResultComponent},
    {path: `**`, redirectTo: `admin`, pathMatch: `full`}
  ]},
  {path:`login`, component: LoginComponent},
  {path:`logout`, component: LoginComponent },
  {path: `users`, component: UsersHomeComponent},
  {path: `**`, component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
