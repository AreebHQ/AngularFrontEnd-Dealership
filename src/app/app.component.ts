import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dealership-app';

  constructor (private router:Router, public loginService:AuthenticationService){
   
      this.router.navigate(['home']);
  }
}

