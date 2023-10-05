import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  employeeRegister!:FormGroup;

  constructor(private fb:FormBuilder) {

  }


  ngOnInit(): void {
    this.employeeRegister=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(6)]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      salarly:['',[Validators.required]],
      designation:['',[Validators.required]],
      phone:['',[Validators.required]]
    })
  }


  onSubmit(){
   console.log((this.employeeRegister.value));
  }

}
