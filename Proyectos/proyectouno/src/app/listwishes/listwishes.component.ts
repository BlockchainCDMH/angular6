import { Component, OnInit } from '@angular/core';
import { Destinoviaje } from '../models/Destinoviaje.models';

@Component({
  selector: 'app-listwishes',
  templateUrl: './listwishes.component.html',
  styleUrls: ['./listwishes.component.css']
})
export class ListwishesComponent implements OnInit {
 ListaDestinos: Destinoviaje[];
  constructor() {
    this.ListaDestinos=[];
  }

  ngOnInit(): void {
  }
  Guardar (nombre, url):boolean{
   this.ListaDestinos.push(new Destinoviaje(nombre,url)); 

    return false;
  }

}
