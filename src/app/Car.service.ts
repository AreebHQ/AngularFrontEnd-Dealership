import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from './Car';
import { Message } from './Message';
import { searchQuery } from './CarSearchQueryModel';



@Injectable({
  providedIn: 'root'
})

export class CarService {

  private apiServerUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }


  public getCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/angular/sales/index`);
  }

  public getNewCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/angular/Inventory/new`);
  }

  public getUsedCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/angular/Inventory/used`);
  }

  public sendContactUsMessage(msg : Message) : Observable<Message> {
    console.log("service called");
    return this.http.post<Message>(`${this.apiServerUrl}/angular/contactus/message`, msg);
  }

  public newInventorySearch(newCarSearchQuery: searchQuery) : Observable<Car[]> {

    return this.http.post<Car[]>(`${this.apiServerUrl}/angular/Inventory/searchNewInventory`,newCarSearchQuery);
  }
  


}
