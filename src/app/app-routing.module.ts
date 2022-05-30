import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { HomeComponent } from './new-inventory/new-invnetory-home/home.component';
import { SearchHeaderComponent } from './new-inventory/search-header/search-header.component';
import { VehicleDetailComponent } from './new-inventory/vehicle-detail/vehicle-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpecialsComponent } from './specials/specials.component';
import { UsedInventoryComponent } from './used-inventory/used-inventory.component';

const routes: Routes = [
  {path: ``, redirectTo: `/home`, pathMatch: `full`},
  {path: `home`, component: FeaturedComponent},
  {path: `newInventory`, component: HomeComponent,
  children: [
    {path: ``, redirectTo: `home`, pathMatch: `full`},
    {path: `searchHeader`, component: SearchHeaderComponent},
    {path: `vehicleDetail`, component: VehicleDetailComponent},
    {path: `**`, redirectTo: `newInventory`, pathMatch: `full`}]
  },
  {path: `usedInventory`, component: UsedInventoryComponent, 
  children: [
    {path: `vehicleDetail` , component: VehicleDetailComponent},
    {path: `**`, redirectTo: `usedInventory`, pathMatch: `full`}
  ]},
  {path:`contactUs` , component: ContactUsComponent},
  {path:`specials` , component: SpecialsComponent},
  {path: `**`, component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
