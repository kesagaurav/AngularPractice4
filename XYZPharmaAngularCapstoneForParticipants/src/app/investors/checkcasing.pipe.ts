import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkcasing'
})
export class CheckcasingPipe implements PipeTransform {

  transform(value:string, args?: any): any {

    //convert quater to uppercase and then combine the quater and year entered
     const year=new Date();
     var year1=new Date().getFullYear();
     const quarter="";
     //quarter.map(a=>a).map(a=>a.toUpperCase);
     //console.log(quarter);

     const combine=quarter.toUpperCase() + year1;
     console.log(combine);

     return combine;

  }

}
