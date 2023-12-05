import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-forms-module',
  templateUrl: './employee-forms-module.component.html',
  styleUrls: ['./employee-forms-module.component.css']
})
export class EmployeeFormsModuleComponent {

 @ViewChild('f') Loginformgroup!:NgForm;

 gaurav={
  firstName:'',
  lastName:'',
  email:'',
  phone:''
 }
 onSubmit(){
  console.log(this.Loginformgroup.value);
  this.gaurav.firstName=this.Loginformgroup.form.value.firstName;
  this.gaurav.lastName=this.Loginformgroup.form.value.lastName;
  this.gaurav.email=this.Loginformgroup.form.value.email;
  this.gaurav.phone=this.Loginformgroup.form.value.phone;
  console.log(this.gaurav.firstName + " " + this.gaurav.lastName + " " + this.gaurav.email + " " + this.gaurav.phone);


 }

}
