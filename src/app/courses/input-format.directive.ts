import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el:ElementRef) {}
  @Input('appInputFormat') format?:string;
  @HostListener('blur') onBlur():any{
    let value:string = this.el.nativeElement.value;
    if(this.format === 'lowercase')
       this.el.nativeElement.value = value.toLowerCase();
    else
       this.el.nativeElement.value = value.toUpperCase();
  }
}
