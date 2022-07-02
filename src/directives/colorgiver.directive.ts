import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorgiver]'
})
export class ColorgiverDirective {

  constructor(private el:ElementRef) {
  
   }
   @HostBinding("style.backgroundColor")bgColor:any;
   @HostListener('mouseenter')
   onEnter()
   {
    this.bgColor='pink';
   }
   @HostListener('mouseleave')
   onDOwn()
   {
    this.bgColor='green'
   }
   ngOnInit()
   {
    this.bgColor="green";
   
   }

}
