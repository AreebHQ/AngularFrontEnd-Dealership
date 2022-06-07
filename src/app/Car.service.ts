import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from './Car';
import { Message } from './Message';
import { searchQuery } from './CarSearchQueryModel';
import { Specials } from './Specials';
import { PurchaseQuery } from './PurchaseQueryModel';



@Injectable({
  providedIn: 'root'
})

export class CarService {

  private apiServerUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }


  public getCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/angular/featured`);
  }

  public getNewCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/angular/Inventory/new`);
  }

  public getUsedCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/angular/Inventory/used`);
  }

  public sendContactUsMessage(msg : Message) : Observable<Message> {
    
    return this.http.post<Message>(`${this.apiServerUrl}/angular/contactus/message`, msg);
  }

  public newInventorySearch(newCarSearchQuery: searchQuery) : Observable<Car[]> {

    return this.http.post<Car[]>(`${this.apiServerUrl}/angular/Inventory/searchNewInventory`,newCarSearchQuery);
  }
  
  public usedInventorySearch(usedCarSearchQuery: searchQuery) : Observable<Car[]> {

    return this.http.post<Car[]>(`${this.apiServerUrl}/angular/Inventory/searchUsedInventory`,usedCarSearchQuery);
  }

  public getSpecials() : Observable<Specials[]> {

    return this.http.get<Specials[]>(`${this.apiServerUrl}/angular/home/specials`);
  }

  public getAllAvaiableVehicles() : Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiServerUrl}/angular/sales/index`);
  }

  public availableVehiclesSearch(availableCarSearchQuery:searchQuery) : Observable<Car[]>{

    return this.http.post<Car[]>(`${this.apiServerUrl}/angular/sales/searchVehicles`,availableCarSearchQuery);
  }

  public purchaseVehicle(purchaseQuery:PurchaseQuery)  {
    return this.http.post(`${this.apiServerUrl}/angular/sales/purchase`,purchaseQuery,{responseType: 'text'});
  }

}
