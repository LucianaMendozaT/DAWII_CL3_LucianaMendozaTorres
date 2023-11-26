import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { CalculadoraNotaComponent } from './calculadora-nota/calculadora-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    EstacionamientoComponent,
    CalculadoraNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
