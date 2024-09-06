import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './componentes/barraNavegacion/barra-navegacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactoComponent,
    FooterComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
