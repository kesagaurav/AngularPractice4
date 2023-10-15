import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  registerForm!:FormGroup;
  constructor(private fb:FormBuilder) {

  }
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',[Validators.required,Validators.pattern("[a-zA-z]{6}")]],
      lastName:['',[Validators.required,Validators.pattern("[a-zA-z]{4}")]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      address:['',[Validators.required,this.validateAddress,Validators.compose]]
    })
  }



  validateAddress(c:FormControl):any{
    let a="[a-z]{1,}/$";
    a.match("![#@]") ? null :{
      addressInvalid:{
       message: 'isInvalid'
    }
  }
  }

}
