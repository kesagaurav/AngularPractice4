import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import {of,from, range, max, filter, count, map, distinct, reduce, scan, last, first, startWith, endWith, interval, take, combineLatestAll,min, concatAll, concat, concatMap, merge} from 'rxjs';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularPractice';
  book!:Book;
  obj={id:1,name:'guarav'};
  constructor(private service:BookService){}
  ngOnInit(): void {
    this.service.temp();
    let x=of(Book).subscribe(data=>{
        this.book=this.book;


    })
    //of
    let y=of(this.obj).subscribe(gaurav=>{
      console.log(gaurav);

    })
    //from
    let z=from(['angular']).subscribe(gaurav=>{
      console.log(gaurav);

    })
    //range
    let range1=range(3,9).subscribe(range=>{
      console.log(range);

    })
    //max
    let o=of(89,90,100).pipe(max()).subscribe(res=>{
      console.log("the max value is " + res);

    })
    //filter
    let t=of(1,2,3,4,5,6,7,8,9,10).pipe(filter(a=>a%2==0)).subscribe(res=>{
      console.log("even is " + res);

    })
    //count
    let a=of(9,8,7,6,5).pipe(filter(a=>a%2!=0)).pipe(count()).pipe(map(a=>a)).subscribe(res=>{
      console.log("the values of odd and its count " + res);

    })
    //max
    let b=of(100,200,300,1000).pipe(max()).subscribe(res=>{
      console.log("max element is " + res);

    })

    //distinct
    let h=of(100,100,1,1,2,2,3,4,5,6,7,7,7,9,10).pipe(distinct()).subscribe(res=>{
      console.log('distinct elements are ' + res);

    })
    //reduce
    let w=of(100,200,300).pipe(reduce((a,b,c)=>{
      console.log('accumaulator ' + a);
      console.log('current' + b);


      //console.log('add values are ' + a+b+c);
      return  a+b+c;

    },0)).subscribe(res=>{
      console.log("the values of addition are " + res);

    })




    //scan
    let s=of(100,200,300).pipe(scan((a,b,c)=>{
      console.log('accumaulator ' + a);
      console.log('current' + b);


      //console.log('add values are ' + a+b+c);
      return  a+b+c;

    },0)).subscribe(res=>{
      console.log("the values of addition are " + res);

    })

    //last
    let l=of(1,2,3,4,'gaurav').pipe(last()).subscribe(
      {
        next:data=>{
          console.log("the last element is  " + data);

        },
        error:err=>{
          console.log('error');

        },
        complete:()=>{
          console.log('hey this pipe is completed hurray');

        }
      }
    )


      //first
    let f=of(1,2,3,4,'gaurav').pipe(first()).subscribe(
      {
        next:data=>{
          console.log("the first element is  " + data);

        },
        error:err=>{
          console.log('error');

        },
        complete:()=>{
          console.log('hey this pipe is completed hurray');

        }
      }
    )
    this.joinOperatorsPracticeStartsWith();
    this.combineLtestAll();

    let r=of(1,2,3).pipe(map(a=>a)).forEach(a=>console.log(" pipe using map are " + a));
      //merge
    let obs1=of(1,2);
    let obs2=from([3,4]);

    let obs3=merge(obs1,obs2);
    obs3.subscribe(res=>console.log("merge operator using rxjs " + res))

    //take
    let ob4=of(1,2,3).pipe(take(3)).subscribe(res=>{
      console.log( " take operator in rxjs"   + res);

    })





  }



  joinOperatorsPracticeStartsWith(){
    let x=of("gaurav").pipe(map(a=>"gaurav-timer"),startWith('gaurav')).subscribe(res=>{
      console.log('hey i am starting with ' + res);

    })
  }

  combineLtestAll(){
    let max1=of(100,200,300);
    let max2=of(400,500,600);

    // concat([max1,max2]).subscribe(res=>{
    //   console.log(res);

     let max3= max2.pipe(map(value=>max1.pipe(take(value))),concatAll()).subscribe(res=>console.log(res))
      console.log(max1,max2,max3);



    }



    }





