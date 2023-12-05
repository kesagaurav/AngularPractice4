import { HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeFormsModuleComponent } from './employee-forms-module/employee-forms-module.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { AuthInterceprotService } from './auth-interceprot.service';
import { LoggingInterceptorService } from './logging-interceptor.service';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeFormsModuleComponent,
    BookComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceprotService,multi:true},{provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
