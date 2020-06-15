import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import {DestinosApiClient} from '../models/Destinos-Api-Client-model'

@Component({
  selector: 'app-listwishes',
  templateUrl: './listwishes.component.html',
  styleUrls: ['./listwishes.component.css']
})
export class ListwishesComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  constructor(private DestinosApiClient:DestinoViaje) {
    this.onItemAdded=new EventEmitter();
  }

  ngOnInit(): void {
  }
  Agregado (d: DestinoViaje){
    this.DestinosApiClient.add(d);
    this.onItemAdded.emit(d);

  }
  elegido(e: DestinoViaje){
    this.DestinosApiClient.getAll().forEach(function(x){ x.SetState(false)});
    e.SetState(true);
  }

}
