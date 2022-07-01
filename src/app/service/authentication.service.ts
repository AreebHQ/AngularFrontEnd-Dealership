
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  username : string;
  password : string;

  constructor(private http:HttpClient) { }

  public authenticate(username:string, password:string) {
    
    let info = {"username":username, "password":password};

    this.login(username,password).subscribe((result)=>{
      return true;
    });

   /* this.http.get(`http://localhost:8080/login`,{ headers : {authorization: this.createBasicAuthToken(username,password)}}).subscribe((result)=>{
      sessionStorage.setItem('username', username)
      return true;
    });*/


   /* if (username === "adam@gmail.com" && password === "adam123") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }*/
    return false;
  }


 /* public login(username:string, password:string) {
    console.log("login called from authentication serice");
    const headers=new HttpHeaders({Authorization: `Basic `+btoa(username+":"+password)})
    return this.http.post("http://localhost:8080/login",{headers,responseType:`text` as `json`});
  }*/

  login(username:string, password:string) {
    return this.http.get(`http://localhost:8080/login`,
    { headers : {authorization: this.createBasicAuthToken(username,password)}}
      ).pipe(map((res)=>{
        this.username = username;
        this.password = password;
        this.registrationSuccessfulLogin(username,password);
      }));
  }


  createBasicAuthToken(username:string, password:string){
    return `Basic `+window.btoa(username + ":" +password);
  }

  registrationSuccessfulLogin(username:string, password:string)
  {

  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
