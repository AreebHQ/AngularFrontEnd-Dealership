import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Input() car : Car;

  constructor() { }

  ngOnInit(): void {
  }

}
