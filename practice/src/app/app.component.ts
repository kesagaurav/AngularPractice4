import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title : string= "practice";

  name: string="gaurav"
 



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  changeText():any{
    this.title="deepa";
   
  }
  
}


