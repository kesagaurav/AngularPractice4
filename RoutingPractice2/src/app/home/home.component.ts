import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  private firstOpsSubscription:Subscription;
  constructor() {

  }

  ngOnInit(): void {

  //  this.firstOpsSubscription= interval(1000).subscribe((count)=>{
  //     console.log(count);

  //   })

  const customInterval=Observable.create(observer=>{
    let count=0;
    setInterval(()=>{
      observer.next(count);
      if(count===5){
      observer.complete();
      }
      if(count>3){
        observer.error(new Error('count is greater 3 !'));
      }
      count++;
    },1000)
  });

//  this.firstOpsSubscription= customInterval.subscribe(data=>{
//     console.log(data);

//   },error=>{
//     console.log(error);
//     alert(error.message);

//   },()=>{
//     console.log('completed!!!');

//   })

  this.firstOpsSubscription= customInterval.pipe(filter((data:number)=>{
    return data > 0;
  }),map((data:number)=>{
    return 'Round: ' + (data + 1);
  })).subscribe(data=>{
    console.log(data);

  },error=>{
    console.log(error);
    alert(error.message);

  },()=>{
    console.log('completed!!!');

  })


  }

  ngOnDestroy(): void {
    this.firstOpsSubscription.unsubscribe();
  }

}
