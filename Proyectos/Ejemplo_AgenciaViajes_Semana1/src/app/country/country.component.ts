import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Destinoviaje } from '../models/Destinoviaje.models';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
@Input() country :Destinoviaje;
@HostBinding('attr.class') cssClass='col-md-4';
  constructor() { }

  ngOnInit(): void {
  }

}
