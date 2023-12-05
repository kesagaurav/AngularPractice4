import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerelementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
   @Input('gauravElement') element:{type:string,name:string,content:string};
   @Input() name:string;
   @ViewChild('heading') header: ElementRef;
  constructor() {
    console.log('constructor called!');

   }
  ngOnDestroy(): void {
    console.log('ngonDestroy called!');

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');

  }
  ngAfterContentChecked(): void {
    console.log(' ngAfterContentChecked called !!!');

  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');// will call only once

  }
  ngDoCheck(): void {
    console.log('ngDoCheck called !!!');//will call when there is an events

  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges called !!!');
      console.log(changes);


  }

  ngOnInit(): void {
    console.log('ngoninit called!');// it will load at the start of component
    console.log('Text content is : ' + this.header.nativeElement.textContent);


  }

}
