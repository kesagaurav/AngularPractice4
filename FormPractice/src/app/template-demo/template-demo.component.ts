import { Component } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent {
name : string="Hello ";

name2:string="gaurav";


name3:string="Java";



color:string="red";

courseName(){
  this.name="Welcome to Angular";
}
curryear:any;
birthyear:any;
onSubmit(data:any){
this.curryear=(new Date()).getFullYear();
console.log(this.curryear);

this.birthyear=this.curryear-data;
console.log(this.birthyear);
console.log(data);



}

myMessage="Hello welcome to the directives topic";



}
