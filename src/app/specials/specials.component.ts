import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Specials } from '../Specials';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  public special : Specials[];

  constructor(private carservice:CarService) { }

  ngOnInit(): void {
    this.getSpecials();
  }

  public getSpecials()
  {
      this.carservice.getSpecials().subscribe(
        (response:Specials[])=>{this.special = response;},
        (error:HttpErrorResponse)=>{alert(error.message);}
      );
  }

}
