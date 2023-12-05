import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('f') signupForm:NgForm;
  @ViewChild('g') signupForm1:NgForm;

  user={
    'name':'',
    'email':''

  }

submitted=false;
advanced='Advanced';


  constructor(public service:AuthService) {

  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }


  onLogin(){
    this.service.login();
  }

  onLogout(){
    this.service.logout();
  }

  // onSubmit(form:NgForm){
  //   console.log(form);

  // }

  onSubmit(){
    console.log(this.signupForm);

  }


  suggetUserName(){
    const name='superGaurav';
    this.signupForm.form.patchValue({
      username:name
    })
  }


  onUserSubmit(){
    this.submitted=true;
    this.user.name=this.signupForm.form.value.username;
    this.user.email=this.signupForm.form.value.email;
    this.signupForm.reset();

  }


  gaurav={
    email:'',
    password:'',
    subscriptions:''

  }
 submitted1=false;

  onSubmitForm(){
    this.submitted1=true;
      this.gaurav.email=this.signupForm1.value.email;
      this.gaurav.password=this.signupForm1.value.password;
      this.gaurav.subscriptions=this.signupForm1.value.subscriptions;
      console.log(this.gaurav.email + " " +this.gaurav.password + " " + this.gaurav.subscriptions );


  }
}
