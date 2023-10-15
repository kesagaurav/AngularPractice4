import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  public url!:string;
  //Inject the HttpClient object to the constructor
  constructor(private http:HttpClient) { }

  getTabDetail(val:any):Observable<Product[]> {
    // make a GET call to "http://localhost:3000/products"
    //replace of() with relevant data returned by API
    this.url="http://localhost:3000/products"
    return this.http.get<Product[]>(this.url);
  }
}
