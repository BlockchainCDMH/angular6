import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListwishesComponent } from './listwishes/listwishes.component';
import { CountryComponent } from './country/country.component';
import {Routes, RouterModule} from '@angular/router';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';

const routes: Routes =[
  {path: '', redirectTo: 'home',pathMatch:'full' },
  {path: 'home', component: ListwishesComponent},
  {path: 'Destino', component: DestinoDetalleComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    ListwishesComponent,
    CountryComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
