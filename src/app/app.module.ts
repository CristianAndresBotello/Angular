import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { TextoComponent } from './texto/texto.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';

@NgModule({
  // Componentes, Pipes
  declarations: [
    AppComponent,
    MenuComponent,
    EjemplosPipesComponent,
    TextoComponent,
    MayusculasPipe
  ],
  // (LO QUE NECESITE ANGULAS - LIBRERIAS)
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
