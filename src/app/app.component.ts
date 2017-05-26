import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloPrincipal = 'Unidades registradas';
  respuesta = '';
  titulos = [
    {
      unitno: 'Unidad 00',
      flota: 'hesatecnica',
      odometro: '123.45',
      textoBoton : 'Consultar'
    },
    {
      unitno: 'Unidad 01',
      flota: 'edh',
      odometro: '123.45',
      textoBoton : 'Consultar'
    },
    {
      unitno: 'Unidad 02',
      flota: 'tekdiesel',
      odometro: '123.45',
      textoBoton : 'Consultar'
    },
    {
      unitno: 'Unidad 03',
      flota: 'tekcerveza',
      odometro: '123.45',
      textoBoton : 'Consultar'
    }
  ];


  botonPresionado(respuesta: string) {
    console.log('botonPresionado()');
    this.respuesta = 'Se ha seleccionado la unidad: ' + respuesta;
  }


}
