import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>(); //passing component outside of the component
  @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
// newServerName = '';
//   newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput:HTMLInputElement){
    console.log(nameInput.value);// it will give all the properties of the particular element or tag this is with using local references
    console.log(this.serverContentInput);

    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }


  // onAddServer(){
  //   console.log(nameInput.value);// it will give all the properties of the particular element or tag

  //   this.serverCreated.emit({
  //     serverName:this.newServerName,
  //     serverContent:this.newServerContent  without using any local references
  //   })
  // }


  onAddBlueprint(nameInput:HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }




  // onAddBlueprint(){
  //   this.blueprintCreated.emit({
  //     serverName:this.newServerName,
  //     serverContent:this.newServerContent
  //   })
  // }


}
