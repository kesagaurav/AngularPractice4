import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective implements OnInit{
  @Input() defaultColor:string="yellow";
  @Input('appBetter') highlightColor:string="blue";


  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;
  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue');
    this.backgroundColor=this.highlightColor;
  }


  @HostListener('mouseleave') mouseleave(eventData:Event){
   // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','yellow');
   this.backgroundColor=this.defaultColor;

  }

}
