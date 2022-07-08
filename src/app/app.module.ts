import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ColorgiverDirective } from '../directives/colorgiver.directive';
import { CcodePipe } from '../pipes/ccode.pipe';
import { ApiData1Component } from './api-data1/api-data1.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiData2Component } from './api-data2/api-data2.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ColorgiverDirective,
    CcodePipe,
    ApiData1Component,
    ApiData2Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
