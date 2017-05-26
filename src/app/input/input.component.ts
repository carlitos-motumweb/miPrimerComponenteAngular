import{Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'input-tituloCard',
    templateUrl:'input.component.html',
    styleUrls:['input.component.css']
})

export class TituloComponent{
    @Input() clave:string;
    @Input() titulo:string;
    @Output() botonPresionado00 = new EventEmitter<string>();

    constructor(){
        console.log('Creando component input');
    }

    votar():void{
        console.log('votar() - ['+this.clave+' - '+this.titulo+']');
        this.botonPresionado00.emit(this.clave);
    }
}
