import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:"User" ,component:UserComponent },
  {path:"Book", component:BookComponent},
  {path:"Login", component:LoginComponent},
  {path:"Home", component:HomePageComponent},
  {path:"",redirectTo:"Login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent, UserComponent,BookComponent,HomePageComponent];