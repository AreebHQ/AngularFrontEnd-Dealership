import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NewInventoryModule } from './new-inventory/new-inventory.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsedInventoryComponent } from './used-inventory/used-inventory.component';
import { VehicleDetailComponent } from './used-inventory/vehicle-detail/vehicle-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchHeaderComponent } from './used-inventory/search-header/search-header.component';
import { UsedInventorySearchResultComponent } from './used-inventory/used-inventory-search-result/used-inventory-search-result.component';
import { SpecialsComponent } from './specials/specials.component';
import { SpecialCardComponent } from './specials/special-card/special-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UsedInventoryComponent,
    VehicleDetailComponent,
    ContactUsComponent,
    SearchHeaderComponent,
    UsedInventorySearchResultComponent,
    SpecialsComponent,
    SpecialCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    NewInventoryModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
