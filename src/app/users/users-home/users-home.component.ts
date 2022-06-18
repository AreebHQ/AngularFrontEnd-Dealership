import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {
  @Input() user:User;
  users : User[] = [];
  addUserFormCollapsed : boolean = false;
  editUserFormCollapsed : boolean = false;

  constructor(private carservice:CarService) { }

  ngOnInit(): void {

  }
  public toggleEditUserFormCollapse()
  {
    this.editUserFormCollapsed = !this.editUserFormCollapsed;
  }
  public toggleAddUserFormCollapse()
  {
   
    this.addUserFormCollapsed = !this.addUserFormCollapsed;
  }

  public getSelectedUser(selectedUser: User)
  {
    this.user = selectedUser;
    this.toggleEditUserFormCollapse();
  }




  public showAddUserForm(){

  }

}
