import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgrxPracticeComponent } from './ngrx-practice/ngrx-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    NgrxPracticeComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
