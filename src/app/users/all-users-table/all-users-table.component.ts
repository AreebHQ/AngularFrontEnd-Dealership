import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.css']
})
export class AllUsersTableComponent implements OnInit {
  users : User[] = [];
  constructor(private carservice:CarService) { }

  ngOnInit(): void {
    this.carservice.getAllUsers().subscribe(
      (response:User[])=>{this.users = response;},
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  }

 public showEditForm(userId:number){
 
    console.log(userId);
  }
}
