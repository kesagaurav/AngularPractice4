import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(private router:ActivatedRoute){}

  employees=[{
    id:1,
    name:'gaurav'
  },
  {
    id:2,
    name:'john'
  },
  {
    id:3,
    name:'michal'
  },
  {
    id:4,
    name:'joseph'
  }
]

employee!:{id:number,name:string};
ngOnInit(): void {
  this.employee={
    id:this.router.snapshot.params['id'],
    name:this.router.snapshot.params['name']
  };

  this.router.params.subscribe((params:Params)=>{
    this.employee.id=params['id'];
    this.employee.name=params['name'];

  })

}


}
