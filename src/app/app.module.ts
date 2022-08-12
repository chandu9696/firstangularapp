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
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavHotelComponent } from './fav-hotel/fav-hotel.component';
import { ReviseconceptComponent } from './reviseconcept/reviseconcept.component';
import { ObservableComponent } from './observable/observable.component';
import { TodoMongoModule } from './todo-mongo/todo-mongo.module';
import { PricingtabComponent } from './pricingtab/pricingtab.component';
import { SponsersaddComponent } from './sponsersadd/sponsersadd.component';
import { SettingComponent } from './setting/setting.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ColorgiverDirective,
    CcodePipe,
    ApiData1Component,
    ApiData2Component,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    HotelsComponent,
    HotelComponent,
    HotelDetailsComponent,
    LoadingSpinnerComponent,
    FavHotelComponent,
    ReviseconceptComponent,
    ObservableComponent,
    PricingtabComponent,
    SponsersaddComponent,
    SettingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TodoMongoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
