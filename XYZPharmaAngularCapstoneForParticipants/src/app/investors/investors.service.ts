import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Quarterinfo} from './Quarterinfo';

@Injectable({
  providedIn: 'root'
})
export class InvestorsService {
  public url!:string;
  //Inject the HttpClient object to the constructor
  constructor(private http:HttpClient) { }

  getQDetails():Observable<Quarterinfo[]> {
    //make a GET call to  "http://localhost:3000/quaterInfo"
    //replace of() with relevant data returned by API
    this.url="http://localhost:3000/quaterInfo";
    return this.http.get<Quarterinfo[]>(this.url);

  }
}
