import { Component, OnInit } from '@angular/core';
import {filter, map, max, of, pipe, reduce,min, distinct, count, defaultIfEmpty, every, find, findIndex, isEmpty, concat, concatAll, take, startWith, endWith, last, first, range, from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NgrxPractice';

  ngOnInit() {
//map
console.log('logging values using map operator using rxjs operators');

let a=of(1,2,3).pipe(map(a=>a)).subscribe(res=>{
  console.log(res);

})

//range
console.log('logging values using range operator using rxjs operators');

let q=range(1,9).pipe(map(a=>a)).subscribe(res=>{
  console.log(res);

})

//from
console.log('logging values using from operator using rxjs operators');

let s=from("gaurav").pipe(map(a=>a)).subscribe(res=>{
  console.log(res);

})

  //filter
  console.log('logging values using filter operator using rxjs operators');
  let b=of(1,2,3,4,6,8,9,10,13).pipe(filter(a=>a%2==0)).subscribe(res=>{
    console.log(res);

  })


  console.log('logging values using reduce operator using rxjs operators');

  let c=of(1,2,3).pipe(reduce((a,b)=>{
    return a+b;
  })).subscribe(res=>console.log(res));

  //mathematical operators
  //max
  console.log('logging values using max operator using rxjs operators');

  const g=of(100,201,500,1001).pipe(max()).subscribe(res=>console.log(res));

  console.log('logging values using min operator using rxjs operators');

  const g1=of(100,201,500,1001).pipe(min()).subscribe(res=>console.log(res));



  console.log('logging values using count operator using rxjs operators');
  const d=of(1,2,3,4,5).pipe(count()).subscribe(res=>{
    console.log(res);

  });




  //end of the mathametical operators in an rxjs operators


    //filtering-operators
//distinct
  console.log('logging values using distinct filtering operator using rxjs operators');

  const y=of(1,1,2,3,3,4,5,6).pipe(distinct()).subscribe(res=>console.log(res));

//last
  console.log('logging values using last filtering operator using rxjs operators');

  const o=of("gaurav","john","tom","crusie").pipe(last()).subscribe(res=>{
    console.log(res);

  })

  //first
  console.log('logging values using first filtering operator using rxjs operators');

  const p=of("gaurav","john","tom","crusie").pipe(first()).subscribe(res=>{
    console.log(res);

  })




  //conditional and boolean operators
  //defaultifempty
  console.log('logging values using defaultifempty operator using rxjs operators');
  const e=of().pipe(defaultIfEmpty('a')).subscribe(res=>{
    console.log(res);

  });

  //every => it gives first occurence of observble result
  console.log('logging values using every operator using rxjs operators');
  const f=of(15,20,25,39).pipe(every(a=>a%5==0)).subscribe(res=>{
    console.log(res);//it will give false if one of the condition fails it will fails

  });
//find => it gives first occurence of observble result
  console.log('logging values using find operator using rxjs operators');
  const j=of(15,20,25,30).pipe(find(a=>a%5==0)).subscribe(res=>{
    console.log(res);

  });

  //findIndex => it is same of the find but it will return the first occurence of index.
  console.log('logging values using findindex operator using rxjs operators');
  const k=of(15,20,25,30).pipe(findIndex(a=>a%5==0)).subscribe(res=>{
    console.log(res);

  });

  //isEmpty()
  console.log('logging values using isEmpty operator using rxjs operators');
  const i=of(1,2,3,4).pipe(isEmpty()).subscribe(res=>{
    console.log(res);

  });


  //concat
  console.log('logging values using concat operator using rxjs operators');

  let obs1=of(1,2,3);
  let obs2=of(4,5,6);
  concat(obs1,obs2).subscribe(res=>{
    console.log(res);

  });

  //concatAll
  console.log('logging values using concatAll operator using rxjs operators');

let obs3=of(1,2,3);
  let obs4=of(4,5,6);
  let obs5=obs3.pipe(map(a=>obs4.pipe(map(a=>a))),concatAll()).subscribe(res=>{
    console.log(res);

  });


  //startsWith
  console.log('logging values using starts with operator using rxjs operators');
let obs8=of('world','everyone','are u doing').pipe(startWith('hello')).subscribe(res=>{
  console.log(res);

});


//endswith
console.log('logging values using ends with operator using rxjs operators');

let obs9=of(['world','everyone','are u doing']).pipe(endWith('world')).subscribe(res=>{
  console.log(res);

});












  }
}
