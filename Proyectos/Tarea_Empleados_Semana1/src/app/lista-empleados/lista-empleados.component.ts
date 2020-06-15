import { Component, OnInit } from '@angular/core';
import { empleados } from '../models/empleado.models';
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  Empleados: empleados[];
  Empleado: empleados;
  compareto:number;
  constructor() {
    this.compareto=0;
    this.Empleados = [new empleados("albus dumbledore", "Director", 5000000)];
  }

  ngOnInit(): void {
  }
  refresh(input){
    this.compareto=parseInt(input);
  }
  guardar(nombre: String, Cargo: String, Salario: number, formulario): Boolean {
    if (parseInt(formulario.id.value) == -1) {
      this.Empleados.push(new empleados(nombre, Cargo, Salario));
      formulario.reset();
      return false;
    } else {
      this.Empleados[formulario.id.value] = new empleados(nombre, Cargo, Salario);
      formulario.reset();
      formulario.id.value = -1;
      return false
    }

  }
  edit(index, formulario): boolean {
    this.Empleado = this.Empleados[index];
    formulario.id.value = index;
    formulario.Nombre.value = this.Empleado.Nombre;
    formulario.Cargo.value = this.Empleado.Cargo;
    formulario.Salario.value = this.Empleado.Salario;
    return false;
  }
  drop(index, formulario): boolean {
    this.Empleados.splice(index, 1);
    return false;
  }
}

