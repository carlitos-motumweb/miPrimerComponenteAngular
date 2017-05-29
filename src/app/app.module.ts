import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TituloComponent } from './input/input.component';
import {MultiplicadorPipe} from './pipes/multiplicador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MultiplicadorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
