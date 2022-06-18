import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';
import { User } from 'src/app/User';
import { UsersHomeComponent } from '../users-home/users-home.component';

@Component({
  selector: 'app-all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.css']
})
export class AllUsersTableComponent implements OnInit {
  @Input() user:User;
  users : User[] = [];
  constructor(private carservice:CarService, private homeComponent:UsersHomeComponent) { }

  ngOnInit(): void {
    this.carservice.getAllUsers().subscribe(
      (response:User[])=>{this.users = response;},
      (error:HttpErrorResponse)=>{alert(error.message);}
    );


  }

 public showEditForm(user:User){
    this.homeComponent.getSelectedUser(user);
    console.log(user);
  }
}
