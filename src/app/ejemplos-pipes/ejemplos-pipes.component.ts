import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  nombre: string = 'Cristian AnDreS BoTellO';
  cont: number = 0;
  PI: number = Math.PI;
  porcentaje: number = 0.236;
  salario: number = 1243.5;
  fecha: Date = new Date()
  idioma: string = 'es';
  activar: boolean = false;
  nombreM: string = 'Cristian AnDreS BoTellO'
  descripcionM: string = 'Estamos probando un limit string para poder mostrar ciertos caracteres no mas'
  constructor() { }

  ngOnInit(): void {
  }

  contador() {
    this.cont++
  }
}
