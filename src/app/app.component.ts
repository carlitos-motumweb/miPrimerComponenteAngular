import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloPrincipal = 'Primer proyecto de prueba con Angular2!';
  tituloCard00 = 'Tarjeta 00';
  descripcionCard00 = 'Descripción 00';
  textoBotonCar00 = 'Boton00';
  tituloCard01 = 'Tarjeta 01';
  descripcionCard01 = 'Descripción 01';
  textoBotonCar01 = 'Boton01';

  actionBoton00(): void {
    console.log("se ha presionado el boton00");
    this.tituloCard00 = this.tituloCard00.toUpperCase();
  }
  actionBoton01(): void {
    console.log("se ha presionado el boton01");
    this.tituloCard01 = this.tituloCard01.toUpperCase();
  }


}
