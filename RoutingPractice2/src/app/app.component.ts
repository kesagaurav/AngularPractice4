import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  title = 'RoutingPractice2';
  private activatedSub:Subscription;
  constructor(private service:EmployeeService){}

  userActivated=false;
  ngOnInit(): void {

   this.activatedSub= this.service.activatedEmitter.subscribe(a=>{
      this.userActivated=a;
    })
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

}
