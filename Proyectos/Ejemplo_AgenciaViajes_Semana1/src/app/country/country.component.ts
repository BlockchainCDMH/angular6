import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Destinoviaje } from '../models/destino-viaje.model';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country: Destinoviaje;
  @Input() indice: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked:EventEmitter<Destinoviaje>;
  constructor() {
    this.clicked = new EventEmitter();
   }

  ngOnInit(): void {
  }
  
  ir():Boolean { 
    this.clicked.emit(this.country);
    return false;
  }
}
