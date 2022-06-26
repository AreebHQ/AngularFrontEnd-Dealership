import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from 'src/app/car.service';
import { CarQueryModel } from 'src/app/CarQueryModel';
import { User } from 'src/app/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  @ViewChild('editUserForm',{static:false}) editUserForm: NgForm;
  @Input() user : User;

  userRole:number;
  firstName:string;
  lastName:string;  
  email:string;
  password:string;
  confirmPassword:string;

  constructor(private carservice:CarService) { }

  ngOnInit(): void {

    
     //setting car information in form
     setTimeout(() => {
      this.editUserForm.setValue({
        firstName:this.user.firstName,
        lastName:this.user.lastName,
        email:this.user.email,
        userRole:this.user.role.id,
        password:this.user.password,
        confirmPassword:this.user.password
  
       });
       });
  }

  public editUser(userId:number){
 console.log(userId);

  }

  public deleteUser(userId:number)
  {
  console.log(userId);
  this.carservice.deleteUser(userId);

  }

  public selectUserRole(event:any)
  {
    this.userRole = event.target.value;
    console.log(this.userRole);
  }
}
