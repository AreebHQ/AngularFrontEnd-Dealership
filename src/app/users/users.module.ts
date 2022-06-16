import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { AllUsersTableComponent } from './all-users-table/all-users-table.component';


@NgModule({
  declarations: [
    UsersHomeComponent,
    AllUsersTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
