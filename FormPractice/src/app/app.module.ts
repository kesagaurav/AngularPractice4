import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { PipeDemoPipe } from './pipe-demo.pipe';
import { DemoPipe } from './demo.pipe';
import { MessageDirective } from './message.directive';
import { BetterDirective } from './better.directive';
import { UnlessDirective } from './unless.directive';
import { PracticeDirective } from './practice.directive';
import { Practice2Directive } from './practice2.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegisterComponent,
    TemplateDemoComponent,
    PipesDemoComponent,
    PipeDemoPipe,
    DemoPipe,
    MessageDirective,
    BetterDirective,
    UnlessDirective,
    PracticeDirective,
    Practice2Directive
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
