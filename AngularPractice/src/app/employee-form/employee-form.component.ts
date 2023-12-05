import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{

  employeeForm!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
  this.employeeForm=this.fb.group({
    firstName:['',[Validators.required,this.validateFisrtName]],
    lastName:['',[Validators.required,Validators.minLength(6)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,this.validatePhone]],

  })

  }

   validateFisrtName(c:FormControl):any{
    let AREGEX=/^[a-zA-z]{6}$/;
   return AREGEX.test(c.value) ? null :{

      minName:{
        message:'min lenght is six!'
      }
    }

    // let regex=/^[a-zA-Z]{6}$/;
    // if(regex.test(c.value) ){
    //   return "name is invalid";
    // }
  }



  validatePhone(c:FormControl):any{
    let phone=/^[0-9]{10}$/;
  return   phone.test(c.value)?null:{
      phoneisInvalid:{
        message:'invalid phone number !'
      }
    }
  }




  onSubmit(){
    console.log(this.employeeForm.value);

  }



}
