import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'multiplicador'})
export class MultiplicadorPipe implements PipeTransform{
    transform(value:number, exponent: string):number{
        // let val = parseFloat(value);
        let exp = parseFloat(exponent);
        let mult = (value * exp);
        return mult;
    }
}
