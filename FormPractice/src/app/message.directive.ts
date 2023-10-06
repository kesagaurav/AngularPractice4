import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMessage]'
})
export class MessageDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor='green';
  }

}
