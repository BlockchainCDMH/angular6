import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Destinoviaje } from '../models/Destinoviaje.models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Destinoviaje>;
  fg: FormGroup;
  constructor(fb:FormBuilder) { 
    this.onItemAdded=new EventEmitter();
    this.fg=fb.group({
      nombre:[''],
      url: ['']
    });
    this.fg.valueChanges.subscribe((form:any)=>{
      console.log("Cambio el formulario: " +form);
    });
  }

  ngOnInit(): void {
  }
  guardar(nombre: String, url: String): Boolean{
    const d= new Destinoviaje(nombre,url);
    this.onItemAdded.emit(d);
    return false;
  }

}
