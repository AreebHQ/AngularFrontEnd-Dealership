import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from './Car';
import { Message } from './Message';
import { searchQuery } from './CarSearchQueryModel';
import { Specials } from './Specials';
import { PurchaseQuery } from './PurchaseQueryModel';
import { Make } from './Make';
import { Model } from './Model';
import { CarBody } from './CarBody';
import { Color } from './Color';
import { CarQueryModel } from './CarQueryModel';
import { User } from './User';



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

  public editVehicle(vehicle:CarQueryModel) {
    console.log('called editvehicle from service');
    return this.http.post(`${this.apiServerUrl}/angular/admin/editVehicle`,vehicle);
  }

  public getAllMake() : Observable<Make[]> {
    return this.http.get<Make[]>(`${this.apiServerUrl}/angular/admin/makes`);
  }

  public getAllModel() : Observable<Model[]> {
    return this.http.get<Model[]>(`${this.apiServerUrl}/angular/admin/models`);
  }

  public getAllVehicleBodies() : Observable<CarBody[]> {
    return this.http.get<CarBody[]>(`${this.apiServerUrl}/angular/admin/vehicleBodies`);
  }

  public getAllColors() : Observable<Color[]> {
    return this.http.get<Color[]>(`${this.apiServerUrl}/angular/admin/vehicleColors`);
  }

  public addNewVehicle(vehicle:CarQueryModel) : Observable<Car>{
    return this.http.post<Car>(`${this.apiServerUrl}/angular/admin/addVehicle`,vehicle);
  }

  public getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/angular/admin/users`);
  }
  public addNewUser(newUser:any) : Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/angular/admin/addUser`,newUser);
  }

  public deleteUser(userId:number) : void {
    console.log(userId + 'from service');
    let param1 = new HttpParams().set(`userId`,userId);
    this.http.post(`${this.apiServerUrl}/angular/admin/deleteUser`, 666);
  }


}
