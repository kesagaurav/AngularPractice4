import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  id!:number;
  constructor(public route:ActivatedRoute,private service:EmployeeService) {

  }
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params.id;
    })
  }


  onActivate(){
this.service.activatedEmitter.next(true);
  }


}
