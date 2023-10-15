import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeDemoPipe } from './pipe-demo.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PipeDemoPipe,
    PipeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
