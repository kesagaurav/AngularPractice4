import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './login-component/login-component.component';
import { Logincomponet2Component } from './logincomponet2/logincomponet2.component';
import { OfferRideComponentComponent } from './offer-ride-component/offer-ride-component.component';
import { GauravFormsComponent } from './gaurav-forms/gaurav-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    Logincomponet2Component,
    OfferRideComponentComponent,
    GauravFormsComponent
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
