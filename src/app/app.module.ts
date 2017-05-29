import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TituloComponent } from './input/input.component';
import {MultiplicadorPipe} from './pipes/multiplicador.pipe';

import{FondoEspecialDirective} from './directivas/fondoEspecial.directive';
import{TituloEnormeDirective} from './directivas/tituloEnorme.directive';
import{TicketService} from './services/ticketService';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MultiplicadorPipe,
    TituloEnormeDirective,
    FondoEspecialDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})

export class AppModule { }
