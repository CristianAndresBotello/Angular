import { Component, OnInit } from '@angular/core';
import { IPersona } from '../../interfaces/persona.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  persona: IPersona  = {} as IPersona; // Inicializa automaticamente las variables de la interface

  constructor(private _paisService : PaisService) { }

  ngOnInit(): void { // Se ejecuta cuando se mustra el componente (AUTOMATICAMENTE)
    this.getPaises();
  }

  mostrarNombre(){
    // Funcion puede mostrar el nombres
    console.log(this.persona.nombre);
  }
  
  guardar(){
    console.log(this.persona);
  }

  validarMinLetras(){
    return this.persona.nombre ? (this.persona.nombre.length < 5 ? true : false) : true;
  }

  getPaises(){
    this._paisService.getPaises().subscribe(paises => {
      console.log(paises)
    }); // Llamamos al metodo del servicio creado 
  }

}
