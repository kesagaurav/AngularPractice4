import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthserviceService } from './authservice.service';
import { AuthguardService } from './authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    EmployeeComponentComponent,
    PipeDemoComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthserviceService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
