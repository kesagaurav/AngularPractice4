import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  activatedEmitter=new Subject<boolean>();

  constructor() { }
}
