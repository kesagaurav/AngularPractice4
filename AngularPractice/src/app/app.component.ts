import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import {of,from, range, max, filter, count, map, distinct, reduce, scan, last, first, startWith, endWith, interval, take, combineLatestAll,min, concatAll, concat, concatMap, merge, combineLatest, defaultIfEmpty, every, find, findIndex, Subject, isEmpty} from 'rxjs';
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

    //startsWith
    const gaurav=of('gaurav',"deepa","omkar","gauri").pipe(
      startWith('gaurav')
    ).subscribe(res=>{
      console.log('starrts with ' + res);

    })

    //combine latest

    const a1=of(1,2,3).pipe(max());
    const b1=of(1,2,3).pipe(min());
    combineLatest(a1,b1).subscribe(res=>console.log(" combine values are " + res)
    )

    const c1=of(1,2,3).pipe();
    const x2=of(3,4,5).pipe();
    combineLatest(c1,x2).subscribe(([res,res1])=>{
      console.log(`res : ${res}`);
      console.log(`res1:${res1}`);


    })


    //startswith
    const source=of(1,2,3);
    source.pipe(startWith(0)).subscribe(res=>{
      console.log(res);

    })

    //default is empty
    const empty=of().pipe(defaultIfEmpty("0"),startWith(0),endWith(1),endWith("gaurav"),startWith("kesa")).subscribe(res=>{
      console.log(res);

    })


    //every for true case
    const every1=of(2,4,6).pipe(every(a=>a%2==0)).subscribe(res=>{
      console.log('even values with every operator ' + res);

    })

    //every for false case
    const every2=of(2,4,7).pipe(every(a=>a%2==0)).subscribe(res=>{
      console.log('even values with every operator ' + res);

    })


    //find
    const hey=of(3,19,20,15).pipe(find(a=>a%5==0)).subscribe(res=>{
      console.log('find operator in rxjs ' + res);//it will only give the first occurence of the values

    })

    //find if the value is not found

    const hey1=of(3,19,21,22).pipe(find(a=>a%5==0)).subscribe(res=>{
      console.log('find operator if the value is not found in rxjs ' + res);//it will only give the first occurence of the values

    })


    //findIndex

    const hey3=of(3,19,21,15,20).pipe(findIndex(a=>a%5==0)).subscribe(res=>{
      console.log('findIndex operator in rxjs ' + res);//it will only give the first index occurence of the values

    })


    //if findIndex index didnot found
    const hey4=of(3,19,22,23).pipe(find(a=>a%5==0)).subscribe(res=>{
      console.log('findIndex operator in rxjs ' + res);//it will only give the first occurence of the values

    })

    //isempty
    const g1=new Subject<String>();
    const g2=g1.pipe(isEmpty());

    g1.next('1');
    g1.next('2');
    g1.next('3');
    g1.complete();

    g1.subscribe(res=>console.log(res));

    g2.subscribe(res=>console.log(res));

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





