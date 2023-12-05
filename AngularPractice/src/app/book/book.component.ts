import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  books!:Book[];
  errorMessage!:string;
  constructor(private service:BookService){}
  ngOnInit(): void {
    this.service.temp();
    // console.log(
    // this.service.getBooks());
    this.getBooks();

  }


  getBooks(){
    this.service.getBooks().subscribe(
     {
      next: (res)=>{
        this.books=res;
      },
      error:()=>{
        this.errorMessage=`something went wrong`;
      },
      complete:()=>{
        console.log("successfuly showed the book");

      }
     }

    )
  }


  addBooks(){
    this.service.insertBook().subscribe(
      {
        next: (book:any)=>{
         this.books.push(book);

        },
        error:()=>{
          this.errorMessage=`something went wrong`;
          console.log(this.errorMessage);

        },
        complete:()=>{
          console.log("successfuly showed the book");

        }
       }
    )
  }


}
