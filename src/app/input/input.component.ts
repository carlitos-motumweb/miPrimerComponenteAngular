import{Component, Input} from '@angular/core';

@Component({
    selector:'input-tituloCard',
    templateUrl:'input.component.html',
    styleUrls:['input.component.css']
})

export class TituloComponent{
    @Input() titulo:string;

    constructor(){
        console.log('Creando component input');
    }
}
