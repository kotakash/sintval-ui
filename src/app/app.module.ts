import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ValidateUserComponent } from './validate-user/validate-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidateService } from './validate.service';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserService } from './add-user.service';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddUserComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ValidateService,AddUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
