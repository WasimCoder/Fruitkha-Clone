import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[mouseover]'
})
export class StyleDirective {
  constructor(private eref: ElementRef) { }
  @HostListener('mouseover') onMouseOver(){
    this.eref.nativeElement.display = "block";
  }
 
}
