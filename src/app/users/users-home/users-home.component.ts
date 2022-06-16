import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {

  users : User[] = [];
  addUserFormCollapsed : boolean = false;

  constructor(private carservice:CarService) { }

  ngOnInit(): void {

  }

  public toggleAddUserFormCollapse()
  {
    this.addUserFormCollapsed = !this.addUserFormCollapsed;
  }
  public showAddUserForm(){

  }

}
