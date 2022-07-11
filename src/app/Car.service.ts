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

  private apiServerUrl='http://localhost:8080/api';

  constructor(private http: HttpClient) { }


  public getCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/featured`);
  }

  public getNewCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/inventory/new`);
  }

  public getUsedCars() : Observable<Car[]> {

    return this.http.get<any>(`${this.apiServerUrl}/inventory/used`);
  }

  public sendContactUsMessage(msg : Message) : Observable<Message> {
    
    return this.http.post<Message>(`${this.apiServerUrl}/contactus/message`, msg);
  }

  public newInventorySearch(newCarSearchQuery: searchQuery) : Observable<Car[]> {

    return this.http.post<Car[]>(`${this.apiServerUrl}/inventory/searchNewInventory`,newCarSearchQuery);
  }
  
  public usedInventorySearch(usedCarSearchQuery: searchQuery) : Observable<Car[]> {

    return this.http.post<Car[]>(`${this.apiServerUrl}/inventory/searchUsedInventory`,usedCarSearchQuery);
  }

  public getSpecials() : Observable<Specials[]> {

    return this.http.get<Specials[]>(`${this.apiServerUrl}/home/specials`);
  }

  public getAllAvaiableVehicles() : Observable<Car[]> {
    return this.http.get<any>(`${this.apiServerUrl}/sales/index`);
  }

  public availableVehiclesSearch(availableCarSearchQuery:searchQuery) : Observable<Car[]>{

    return this.http.post<Car[]>(`${this.apiServerUrl}/sales/searchVehicles`,availableCarSearchQuery);
  }

  public purchaseVehicle(purchaseQuery:PurchaseQuery)  {
    return this.http.post(`${this.apiServerUrl}/sales/purchase`,purchaseQuery,{responseType: 'text'});
  }

  public editVehicle(vehicle:CarQueryModel) {
    console.log('called editvehicle from service');
    return this.http.post(`${this.apiServerUrl}/admin/editVehicle`,vehicle);
  }

  public getAllMake() : Observable<Make[]> {
    return this.http.get<Make[]>(`${this.apiServerUrl}/sales/makes`);
  }

  public getAllModel() : Observable<Model[]> {
    return this.http.get<Model[]>(`${this.apiServerUrl}/sales/models`);
  }

  public getAllVehicleBodies() : Observable<CarBody[]> {
    return this.http.get<CarBody[]>(`${this.apiServerUrl}/sales/vehicleBodies`);
  }

  public getAllColors() : Observable<Color[]> {
    return this.http.get<Color[]>(`${this.apiServerUrl}/sales/vehicleColors`);
  }

  public addNewVehicle(vehicle:CarQueryModel) : Observable<Car>{
    return this.http.post<Car>(`${this.apiServerUrl}/admin/addVehicle`,vehicle);
  }

  public getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/admin/users`);
  }
  public addNewUser(newUser:any) : Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/admin/addUser`,newUser);
  }

  public deleteUser(userId:number) : void {
    console.log(userId + 'from service');
    let param1 = new HttpParams().set(`userId`,userId);
    this.http.post(`${this.apiServerUrl}/angular/admin/deleteUser`, 666);
  }


}
