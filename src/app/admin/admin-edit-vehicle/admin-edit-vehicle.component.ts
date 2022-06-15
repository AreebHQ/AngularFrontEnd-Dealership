import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/car.service';
import { Make } from 'src/app/Make';
import { Model } from 'src/app/Model';
import { CarBody } from 'src/app/CarBody';
import { Color } from 'src/app/Color';
import { CarQueryModel } from 'src/app/CarQueryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-vehicle',
  templateUrl: './admin-edit-vehicle.component.html',
  styleUrls: ['./admin-edit-vehicle.component.css']
})
export class AdminEditVehicleComponent implements OnInit {
  
  @ViewChild('eForm',{static:false}) editForm: NgForm;

  @Input() car:Car;

  
  editCar : CarQueryModel;
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

  constructor(private carservice : CarService, private router:Router) {
    
  }

  public editVehicle(vehicleId:Number){
    
    console.log(vehicleId);
     
  /*
    this.editCar.make = this.editForm.value.make;
    this.editCar.model = this.editForm.value.model;
    this.editCar.type = this.editForm.value.type;
    this.editCar.body = this.editForm.value.body;
    this.editCar.year = this.editForm.value.year;
    this.editCar.transmission = this.editForm.value.transmission;
    this.editCar.bodyColor = this.editForm.value.bodyColor;
    this.editCar.interiorColor = this.editForm.value.interiorColor;
    this.editCar.mileage = this.editForm.value.mileage;
    this.editCar.vinNumber = this.editForm.value.vinNumber;
    this.editCar.mrspPrice = this.editForm.value.mrspPrice;
    this.editCar.salePrice = this.editForm.value.salePrice;
    this.editCar.description = this.editForm.value.description;
    if(this.editForm.value.image=='')  { this.editCar.image = this.car.image; console.log(this.editCar.image);} 
    else {   this.editCar.image = this.editForm.value.image; console.log(this.editCar.image); }
    console.log(this.editCar.make);
    console.log(this.editCar.model);
    console.log(this.editCar.transmission);
    console.log(this.editCar.body);
    console.log(this.editCar.interiorColor);
    console.log(this.editCar.vinNumber);

*/




    this.make = this.editForm.value.make;
    this.model = this.editForm.value.model;
    this.type = this.editForm.value.type;
    this.body = this.editForm.value.body;
    this.year = this.editForm.value.year;
    this.transmission = this.editForm.value.transmission;
    this.bodyColor = this.editForm.value.bodyColor;
    this.interiorColor = this.editForm.value.interiorColor;
    this.mileage = this.editForm.value.mileage;
    this.vinNumber = this.editForm.value.vinNumber;
    this.mrspPrice = this.editForm.value.mrspPrice;
    this.salePrice = this.editForm.value.salePrice;
    this.description = this.editForm.value.description;
    if(this.editForm.value.image=='')  { this.image = this.car.image; console.log(this.image);} 
    else {   this.image = this.editForm.value.image; console.log(this.image); }
    console.log(this.make);
    console.log(this.model);
    console.log(this.transmission);
    console.log(this.body);
    console.log(this.interiorColor);
    console.log(this.vinNumber);

    this.editCar.id = vehicleId;
    this.editCar.make = this.make;
    this.editCar.model = this.model;
    this.editCar.type = this.type;
    this.editCar.body = this.body;
    this.editCar.year = this.year;
    this.editCar.transmission = this.transmission;
    this.editCar.bodyColor = this.bodyColor;
    this.editCar.interiorColor = this.interiorColor;
    this.editCar.mileage = this.mileage;
    this.editCar.vinNumber = this.vinNumber;
    this.editCar.mrspPrice = this.mrspPrice;
    this.editCar.salePrice = this.salePrice;
    this.editCar.description = this.description;
    this.editCar.image = this.image;





    this.carservice.editVehicle(this.editCar).subscribe(
      
      //if getting response then refresh then nevigate to sales main page
      (response:any)=>{ this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['admin']);
    }); },
       //log error if there is any
      (error:HttpErrorResponse)=>{console.log(error.message);}
      );
}


  ngOnInit(): void {
    this.getMakes();
    this.getModels();
    this.getVehicleBodies();
    this.getColors();
    
    //setting car information in form
    setTimeout(() => {
     this.editForm.setValue({
       make:this.car.make.id,
       model:this.car.model.id,
       type:this.car.type,
       body:this.car.body.id,
       year:this.car.year,
       transmission:this.car.transmission,
       bodyColor:this.car.bodyColor.id,
       interiorColor:this.car.interiorColor.id,
       mileage: this.car.mileage,
       vinNumber:this.car.vinNumber,
       mrspPrice:this.car.mrspPrice,
       salePrice:this.car.salePrice,
       description:this.car.description,
       image:''

      }); 
    });
    
    
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





}
