import { Component } from '@angular/core';

import {TicketService} from './services/ticketService';


@Component({
  selector: 'app-prueba',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloPrincipal = 'Unidades registradas';
  respuesta = '';
  todosTickets:any;
  titulos = [
    {
      unitno: 'Unidad 00',
      flota: 'hesatecnica',
      odometro: 123.45,
      posicionActual : new Date(1977,7,31),
      textoBoton : 'fa fa-car'
    },
    {
      unitno: 'Unidad 01',
      flota: 'edh',
      odometro: 123.45,
      posicionActual : new Date(1977,7,31),
      textoBoton : 'fa fa-car'
    },
    {
      unitno: 'Unidad 02',
      flota: 'tekdiesel',
      odometro: 123.45,
      posicionActual : new Date(1977,7,31),
      textoBoton : 'fa fa-car'
    },
    {
      unitno: 'Unidad 03',
      flota: 'tekcerveza',
      odometro: 123.45,
      posicionActual : new Date(1977,7,31),
      textoBoton : 'fa fa-car'
    }
  ];

  constructor(private ticketService:TicketService){
      this.todosTickets = ticketService.getTickets();
  }


  botonPresionado(respuesta: string) {
    console.log('botonPresionado()');
    this.respuesta = 'Se ha seleccionado la unidad: ' + respuesta;
  }

  texto: string =  "SI";
    estadoPositivo: boolean = true;

    cambiaEstado() {
      this.texto = (this.estadoPositivo) ?  "NO" : "SI";
      this.estadoPositivo = !this.estadoPositivo;
    }

    ngOnInit() {
    }
}
