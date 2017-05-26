import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloPrincipal = 'Unidades registradas';
  textoBoton = "cambiar";
  titulos = [
      {
        unitno:'Unidad 00',
        flota: 'hesatecnica',
        odometro: '123.45'
      },
      {
          unitno:'Unidad 01',
          flota: 'edh',
          odometro: '123.45'
      },
      {
          unitno:'Unidad 02',
          flota: 'tekdiesel',
          odometro: '123.45'
      },
      {
          unitno:'Unidad 03',
          flota: 'tekcerveza',
          odometro: '123.45'
      }
  ];
  actionBoton00(): void {
    console.log('Se ha presionado el botón');
  }


}
