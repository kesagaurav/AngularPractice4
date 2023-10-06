import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPractice]'
})
export class PracticeDirective implements OnInit{

  @Input() defaultColor='violet';
  @Input('appPractice') highlightColor='orange';

  //@HostBinding('style.backgroundColor') backgroundColor:string='violet'; this is for befoer using @Input
  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;

  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
    //this.eleRef.nativeElement.style.backgroundColor='green';
  }

  @HostListener('mouseenter') moueseinsert(){
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','orange');
    //this.backgroundColor='orange';
    this.backgroundColor=this.highlightColor;

  }


  @HostListener('mouseleave') moueseleave(){
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','violet');
   // this.backgroundColor='violet';
   this.backgroundColor=this.defaultColor;
  }




}
