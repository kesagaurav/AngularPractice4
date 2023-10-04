import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gaurav-forms',
  templateUrl: './gaurav-forms.component.html',
  styleUrls: ['./gaurav-forms.component.css']
})
export class GauravFormsComponent implements OnInit{

  registerGaurav!:FormGroup;
  constructor(private fb:FormBuilder) {

  }
  ngOnInit(): void {
   this.registerGaurav=this.fb.group({
    firstName:['',[Validators.required,Validators.maxLength(6)]],
    lastName:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required,Validators.email]]
   })
  }

}
