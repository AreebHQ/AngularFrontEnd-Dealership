import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/car.service';
import { CarBody } from 'src/app/CarBody';
import { CarQueryModel } from 'src/app/CarQueryModel';
import { Color } from 'src/app/Color';
import { Make } from 'src/app/Make';
import { Model } from 'src/app/Model';

@Component({
  selector: 'app-admin-add-new-vehicle',
  templateUrl: './admin-add-new-vehicle.component.html',
  styleUrls: ['./admin-add-new-vehicle.component.css']
})
export class AdminAddNewVehicleComponent implements OnInit {

  @ViewChild('addForm',{static:false}) addForm: NgForm;
  
  addCar = new CarQueryModel();

  public makes : Make[]= [];
  public models : Model[] = [];
  public bodies : CarBody[] = [];
  public colors : Color[] = [];

  private id:Number;
  private make : string;
  private model : string;
  private type : string;
  private body : string;
  private transmission : string;
  private bodyColor : string;
  private interiorColor : string;
  private year : string;
  private mrspPrice:string;
  private salePrice:string;
  private image:String;
  private description:string;
  private mileage:string;
  private vinNumber:string;


  constructor(private carservice : CarService, private router:Router) {}

  ngOnInit(): void {
    this.getMakes();
    this.getModels();
    this.getVehicleBodies();
    this.getColors();
  }

  public selectBodyColor(event:any)
  {
    this.bodyColor = event.target.value;
    console.log(this.bodyColor);
  }
  
  public selectInteriorColor(event:any)
  {
    this.interiorColor = event.target.value;
    console.log(this.interiorColor);
  }

  public selectTransmission(event:any)
  {
    this.transmission = event.target.value;
    console.log(this.transmission);
  }

  public selectBodyStyle(event:any)
  {
    this.body = event.target.value;
    console.log(this.body);
  }

  public selectMake(event:any)
  {
    this.make = event.target.value;
    console.log(this.make);
  }

  public selectVehicleType(event:any)
  {
    this.type = event.target.value;
    console.log(this.type);
  }
  public selectModel(event:any)
  {
    this.model = event.target.value;
    console.log(this.model);
  }

  public getColors()
  {
      this.carservice.getAllColors().subscribe(
        (response:Color[])=>{this.colors = response; },
      (error:HttpErrorResponse)=>{alert(error.message);}
      );
  }

  public getVehicleBodies()
  {
      this.carservice.getAllVehicleBodies().subscribe(
        (response:CarBody[])=>{this.bodies = response; },
      (error:HttpErrorResponse)=>{alert(error.message);}
      );
  }

  public getMakes()
  {
      this.carservice.getAllMake().subscribe(
        (response:Make[])=>{this.makes = response; },
      (error:HttpErrorResponse)=>{alert(error.message);}
      );
  }

  public getModels()
  {
      this.carservice.getAllModel().subscribe(
        (response:Model[])=>{this.models = response; },
      (error:HttpErrorResponse)=>{alert(error.message);}
      );
  }


  public addVehicle()
  {
    this.addCar.make = this.addForm.value.make;
    this.addCar.model = this.addForm.value.model;
    this.addCar.type = this.addForm.value.type;
    this.addCar.body = this.addForm.value.body;
    this.addCar.year = this.addForm.value.year;
    this.addCar.transmission = this.addForm.value.transmission;
    this.addCar.bodyColor = this.addForm.value.bodyColor;
    this.addCar.interiorColor = this.addForm.value.interiorColor;
    this.addCar.mileage = this.addForm.value.mileage;
    this.addCar.vinNumber = this.addForm.value.vinNumber;
    this.addCar.mrspPrice = this.addForm.value.mrspPrice;
    this.addCar.salePrice = this.addForm.value.salePrice;
    this.addCar.description = this.addForm.value.description;
    this.addCar.image = this.addForm.value.image;

    this.carservice.addNewVehicle(this.addCar).subscribe(
      (response:Car)=>{console.log(response);},
      (error:HttpErrorResponse)=>{alert(error.message);
      }
    );
  }

  public cancelButton()
  {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['admin']);});
  }

}
