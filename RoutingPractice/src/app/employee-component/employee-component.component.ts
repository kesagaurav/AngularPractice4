import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit{
constructor(private route:ActivatedRoute) {

}
employees=[
  {
    id:1,
    name:'gaurav'
  },
  {
    id:2,
    name:'john'
  },{
    id:3,
    name:'striver'
  }
]
employee!:{id:number,name:string};
ngOnInit(){
  this.employee= {
    id:this.route.snapshot.params['id'],
    name:this.route.snapshot.params['name']
  };
  this.route.params.subscribe((params:Params)=>{
    this.employee.id=params['id'];
    this.employee.name=params['name'];
  })


  };
}




