import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPractice3]'
})
export class Practice3Directive implements OnInit{
  backgroundColor:string="blue";
  constructor(private renderer:Renderer2,private ref:ElementRef) { }
  ngOnInit(): void {
    this.ref.nativeElement.style.backgroundColor='red';
  }

  @HostListener('ok') onClick(){
    this.backgroundColor="green";
  }



  @HostListener('ok1') onClick1(){
    this.backgroundColor="green";
  }




}
