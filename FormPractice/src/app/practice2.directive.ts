import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPractice2]'
})
export class Practice2Directive {
  @Input('appPractice2') message!:string;
  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }

  @HostListener('click') onClick(){
    this.eleRef.nativeElement.innerHTML=this.message;
    this.renderer.setStyle(this.eleRef.nativeElement,'color','red');
  }

}
