import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, forkJoin, from, merge, of, partition,max, interval, race, map, zip } from 'rxjs';

@Component({
  selector: 'app-ngrx-practice',
  templateUrl: './ngrx-practice.component.html',
  styleUrls: ['./ngrx-practice.component.css']
})
export class NgrxPracticeComponent implements OnInit{
  ngOnInit(){
    let a=of(1,2,3,4);
    let b=of("gaurav","kesa");
    //forkjoin -> it will complete the observables and it will take the last values of observables and print it
    forkJoin({'a':a,'b':b}).subscribe(data=>{
      console.log(data);

    })

    //merge
    let c=of("a","b","c");
    let d=of("d","e","f");

    merge(c,d).subscribe(res=>{
      console.log(res);

    });

    let e=of({"a":1,"b":2,"c":3});
    let f=of({"d":4,"b":5,"c":6});
    let name=new Observable((observer)=>{
      observer.next("gaurav");
      observer.next("kesa");
    })
    merge(e,f,name).subscribe(data=>{
      console.log(data);

    });


    //partition
    console.log('logging using partition operator in regex');
    let g=of(1,2,3,4,5,6,7,8,9,10);
    let data=partition(g,value=>value%2==1);

    data[0].subscribe(res=>{
      console.log('all odd values ' + res);

    })

    data[1].subscribe(res=>{
      console.log('all even values ' + res);

    })

    from(data).pipe(concatMap(a=>a)).subscribe(res=>{
      console.log(res);

    })


    let a1=of(1,2,3).pipe(max()).subscribe(res=>{
      console.log( "max value is " + res);

    })


    //race -> when ever we first emit the data race will take the first emit value as consideration and do the values and remaing observables will be unscribe automatically
    console.log('race operators in rxjs');

    // let source=interval(1).pipe(map(a=>console.log( "first one " + a)
    // ));
    // let source1=interval(2000).pipe(map(b=>console.log( "second " + b)
    // ));
    // let source3=interval(3000).pipe(map(c=>console.log("third one " + c)
    // ));
    // race(source,source1,source3).subscribe(data=>{
    //   console.log(data);

    // })


    //zip
    console.log('zip operators in rxjs');
    let q=of(1,2,3);
    let w=of("gaurav","kesa","john");
    let r=of({"a":1,"b":2,"c":3});

    zip(q,w).subscribe(data=>{
      console.log(data);

    })



  }

}
