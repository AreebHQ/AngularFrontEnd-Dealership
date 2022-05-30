import { Component, Input, OnInit } from '@angular/core';
import { Specials } from 'src/app/Specials';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.css']
})
export class SpecialCardComponent implements OnInit {


  @Input() special : Specials;

  constructor() { }

  ngOnInit(): void {
  }

}
