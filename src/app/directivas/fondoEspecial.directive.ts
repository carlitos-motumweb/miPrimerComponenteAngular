import {Directive, ElementRef, Input} from '@angular/core';

@Directive({selector:'[fondoEspecial]'})
export class FondoEspecialDirective{
    constructor(domElement: ElementRef){
        domElement.nativeElement.style.backgroundColor='blue';
    }
}
