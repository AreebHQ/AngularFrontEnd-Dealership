import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../car.service';
import { Message } from '../Message';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('contactForm', { static: false }) contactUsForm: NgForm;

  name : string;
  email : string;
  phone : number;
  subject : string;
  message : string;
  msg : Message;


  constructor(private carService : CarService) { }

  ngOnInit(): void {
  }

  public onSubmit()
  {
      this.name = this.contactUsForm.value.name;
      this.email = this.contactUsForm.value.email;
      this.phone = this.contactUsForm.value.phone;
      this.subject = this.contactUsForm.value.subject;
      this.message = this.contactUsForm.value.message;
    
      this.msg = new Message(this.name,this.phone.toString(),this.email,this.subject,this.message);
      console.log(this.msg);
     this.carService.sendContactUsMessage(this.msg).subscribe((result)=>{console.log(result)},(error:HttpErrorResponse)=>{console.log(error.message)});
  }

}
