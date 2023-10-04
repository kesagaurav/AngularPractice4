import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{
  registerForm!:FormGroup;
constructor(private formBuilder:FormBuilder){

}
  ngOnInit(): void {
   this.registerForm=this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required]]
   })
  }



}
