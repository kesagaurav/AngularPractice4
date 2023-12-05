import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{

    registerForm!:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
  this.registerForm= this.fb.group({
    firstName:['',[Validators.required,Validators.min(6)]],
    lastName:['',[Validators.required,Validators.minLength(6)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern("[a-zA-z]{8}")]],
    phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]]

   })
  }

}
