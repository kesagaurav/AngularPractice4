import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quarterinfo } from './Quarterinfo';
import { InvestorsService } from './investors.service';
import {CheckcasingPipe} from './checkcasing.pipe';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {
  quaterFor!: FormGroup;
  quaterDetails!:any;
  showTable: boolean = false;
  selectedQDetails!: string;
  errorMessage!: string;
  showError: boolean = false;
  quaterInfo!:Quarterinfo;

 //Inject the FormBuilder and investorsService, InvestorsService and CheckcasingPipe objects to the constructor
 constructor(private fb:FormBuilder,private service:InvestorsService,private pipes:CheckcasingPipe) { }

 ngOnInit() {
   //Initialize the variable quaterForm with a FormBuilder group method containing the below mentioned form control.
   //quater: required validation
   //fyear: required validation
      this.quaterFor=this.fb.group({
        quater:['',[Validators.required]],
        fyear:['',[Validators.required]]
      })
 }

 //Implement getQDetails method that takes in value from input field and display the details of the quater asked for
 getQDetails() {

   //initialize selectedQDetails to the call of the customPipe transform method to convert quater in uppercase and then combine the quater and year entered

             //code here
             const year=new Date().getFullYear();
             const quarter=new Date();
             const combine=this.quaterInfo.quater.toUpperCase() + year;
             this.selectedQDetails=this.pipes.transform(combine);

   //implement the call to getQDetails() of investorsService that will filter the detail of the selected quater and financial year, if specified quater is not available show corresponding errorMessage

             //code here
             this.service.getQDetails().subscribe(res=>{
              this.quaterDetails=this.selectedQDetails;
              error:this.errorMessage
             })
 }
}
