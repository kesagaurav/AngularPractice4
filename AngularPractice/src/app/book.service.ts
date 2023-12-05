import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
url='';
  constructor(private http:HttpClient) {
    this.url="http://localhost:3000/books";
  }
  // books=[{id:1,name:'gaurav'},
  // { id: 2, name: 'CSS 3' },
  // { id: 3, name: 'Java Script' },
  // { id: 4, name: 'Ajax Programming' },
  // { id: 5, name: 'jQuery' },
  // { id: 6, name: 'Mastering Node.js' },
  // { id: 7, name: 'Angular JS 1.x' },
  // { id: 8, name: 'ng-book 2' },
  // { id: 9, name: 'Backbone JS' },
  // { id: 10, name: 'Yeoman' }]

  temp(){
    console.log
    ('hi i am in book service');

  }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.url).pipe(
      //retry(3)
      tap((data)=>console.log(data)
      ),
      catchError(this.handleError)
    );
  }

  insertBook():Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.url,[{id:300,name:'gaurav'},{id:500,name:'deepa'}],{headers:options});
  }


  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }
}
