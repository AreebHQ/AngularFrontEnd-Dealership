
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'Adam@gmail.com';
  password = 'Adam123';
  invalidLogin = false;

  constructor(private router:Router, private loginservice: AuthenticationService, private http:HttpClient) { }

  ngOnInit(): void {
 //  this.checkLogin();

    // this.checkLogin(this.username,this.password);
  }
  checkLogin()
  {
    this.login("a", "a");
  }

  public login(username:string, password:string) {
    username = 'Adam@gmail.com';
    password = 'Adam123';
    console.log("login called from authentication serice");
  //  const headers=new HttpHeaders({Authorization: ("Adam@gmail.com"+":"+"Adam123")})
    return this.http.post("http://localhost:8080/login",{username,password});
  }



 /* checkLogin() {
    console.log(`check login called from login component`);

  if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.invalidLogin = false;
      this.router.navigate(['/home']);
     
    } else
      this.invalidLogin = true 
  }*/


}
