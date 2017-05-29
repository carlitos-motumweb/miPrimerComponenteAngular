import {Directive, ElementRef, Input} from '@angular/core';

@Directive({selector:'[tituloEnorme]'})
export class TituloEnormeDirective{
    constructor(domElement: ElementRef){
        domElement.nativeElement.style.fontSize='60px';
        domElement.nativeElement.style.color='white';
        domElement.nativeElement.style.textAlign='center';
    }
}
