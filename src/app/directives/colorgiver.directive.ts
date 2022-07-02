import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorgiver]'
})
export class ColorgiverDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor="green";
    
   }

}
