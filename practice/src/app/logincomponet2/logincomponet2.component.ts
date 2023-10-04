import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logincomponet2',
  templateUrl: './logincomponet2.component.html',
  styleUrls: ['./logincomponet2.component.css']
})
export class Logincomponet2Component implements OnInit {

  registerForm!:FormGroup;


  constructor(private form:FormBuilder){

  }

  
  ngOnInit(): void {
    this.registerForm=this.form.group({
firstName:['',[Validators.required]],
lastName:['',[Validators.required]],
email:['',[Validators.required,this.verifyEmail]],
phone:['',[Validators.required,this.Verifyphone]]
    })
  }

   Verifyphone(form:FormControl):any{
    let val=/^[0-9]{10}$/;
    return val.test(form.value) ? null :{
      phoneisInvalid:{
        message:'invalid format!'
      }
    };
  }



  verifyEmail(form:FormControl){
    let val=/^[a-zA-z._]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-z]{2,6}$/;
    val.test(form.value) ? null :{
      emailisInvalid:{
        message:'InvalidEmailFormat!'
    }
      
    }
  }




}
