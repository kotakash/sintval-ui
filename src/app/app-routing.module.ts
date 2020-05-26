import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'validate-user',component: ValidateUserComponent},
  {path:'add-user',component: AddUserComponent}  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ValidateUserComponent,AddUserComponent,HomeComponent];