import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/car.service';
import { PurchaseQuery } from 'src/app/PurchaseQueryModel';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Input() car : Car;
  @ViewChild('fSearch',{static:false}) purchaseForm: NgForm;
  
  purchaseQuery : PurchaseQuery;
  name : string;
  email : string;
  phone : number;
  streetOne : string;
  streetTwo : string;
  city : string;
  state : string;
  zip : number;
  purchaseType: string;
  price : string;


  constructor(private carservice:CarService, private router:Router) { }

  ngOnInit(): void {

  }

  setState(event:any)
  {
    this.state = event.target.value;
 
  }
  setPurchaseType(event:any)
  {
    this.purchaseType = event.target.value;
 
  }

  public addPurchase(vehicleId:Number)
  {
    this.name = this.purchaseForm.value.name;
    this.email = this.purchaseForm.value.email;
    this.phone = this.purchaseForm.value.phone;
    this.streetOne = this.purchaseForm.value.streetOne;
    this.streetTwo = this.purchaseForm.value.streetTwo;
    this.city = this.purchaseForm.value.city;
    this.zip = this.purchaseForm.value.zip;
    this.price = this.purchaseForm.value.price;

    this.purchaseQuery = {"vehicleId":vehicleId,"name": this.name,"email":this.email,"phone":this.phone,"street":(this.streetOne+" "+this.streetTwo),"city":this.city,"state":this.state,
      "zip":this.zip,"price":this.price,"purchaseType":this.purchaseType};

    console.log(this.purchaseQuery);
    
    //calling car service for purchase vehicle 
    this.carservice.purchaseVehicle(this.purchaseQuery).subscribe(
      //if getting response then refresh then nevigate to sales main page
      (response:any)=>{ this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['sales']);
    }); },
       //log error if there is any
      (error:HttpErrorResponse)=>{console.log(error.message);}
      );
     
  }

  


}
