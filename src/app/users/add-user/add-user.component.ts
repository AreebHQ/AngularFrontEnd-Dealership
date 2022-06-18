import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/car.service';
import { User } from 'src/app/User';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  @ViewChild('addUserForm',{static:false}) addUserForm: NgForm;
  
  newUser: any;
  userRole:number;
  firstName:string;
  lastName:string;  
  email:string;
  password:string;
  confirmPassword:string;

  constructor(private carservice:CarService, private router:Router) { }

  ngOnInit(): void {
  }

  public selectUserRole(event:any)
  {
    this.userRole = event.target.value;
    console.log(this.userRole);
  }

  public addUser(){
    this.userRole = this.addUserForm.value.userRole;
    this.firstName = this.addUserForm.value.firstName;
    this.lastName = this.addUserForm.value.lastName;
    this.email = this.addUserForm.value.email;
    this.password = this.addUserForm.value.password;
    this.confirmPassword = this.addUserForm.value.confirmPassword;
    this.newUser = {role:this.userRole,firstName:this.firstName, lastName:this.lastName,email:this.email,password:this.password}

    console.log(this.newUser);
    this.carservice.addNewUser(this.newUser).subscribe(
      (response:User)=>{console.log(response);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['users']);});},
      (error:HttpErrorResponse)=>{console.log(error.message);}
  
    );

  }

}
