import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'about', component: AboutComponent },
  { path: 'book', component: BookingComponent },
  { path: 'addMoney', component: AddMoneyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  RegisterComponent,
  LoginComponent,
  RestaurantComponent,
  ServicesComponent,
];
