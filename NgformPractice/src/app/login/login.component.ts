import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('d') Loginformgroup!:NgForm;


  ngOnInit(): void {
  }
  genders=['male','female','other'];
  genderDefault='male';
  gaurav={
    username:'',
    mail:'',
    password:'',
    gender:''
  }
  submitted=false;

  onSubmit(){
    this.submitted=true;
    this.gaurav.username=this.Loginformgroup.form.value.username;
    this.gaurav.mail=this.Loginformgroup.form.value.mail;
    this.gaurav.password=this.Loginformgroup.form.value.password;
    this.gaurav.gender=this.Loginformgroup.form.value.gender;
    console.log(this.gaurav.username + this.gaurav.mail + this.gaurav.password + this.gaurav.gender);


  }

}
