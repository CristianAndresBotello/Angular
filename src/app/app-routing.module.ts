import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { TextoComponent } from './texto/texto.component';
import { FormularioReactivosComponent } from './formularios/formulario-reactivos/formulario-reactivos.component';
import { FormularioNgmodelComponent } from './formularios/formulario-ngmodel/formulario-ngmodel.component';

const routes: Routes = [
  { path: 'pipes', component: EjemplosPipesComponent },
  { path: 'texto', component: TextoComponent },
  { path: 'formulario/ngmodel', component: FormularioNgmodelComponent },
  { path: 'formulario/reactivos', component: FormularioReactivosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'texto' } // Cuando haya una ruta que no encuentre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
