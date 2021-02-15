import { LeftnavComponent } from './leftnav/leftnav.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dash',component:DashboardComponent},
  {path:'adminsec',component:AdminSectionComponent},
  {path: "home",component: HomeComponent},
  {path: "contact",component: ContactComponent},
  {path: "about",component: AboutComponent},
  {path: "cart",component:CartComponent},
  {path: "leftnav",component:LeftnavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
