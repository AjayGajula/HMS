import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, routingComponents, LoginsuccessComponent, ResetpasswordComponent],
  declarations: [
    AppComponent,
    routingComponents,
    AboutComponent,
    BookingComponent,
    ProfileComponent,
    AddMoneyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
