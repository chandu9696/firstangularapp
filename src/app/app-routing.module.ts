import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiData2Component } from './api-data2/api-data2.component';
import { FavHotelComponent } from './fav-hotel/fav-hotel.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'favhotel',component:FavHotelComponent},
  {path:'hotel/:id',component:HotelDetailsComponent},
  {path:'apidata',component:ApiData2Component},
  {path:'observe',component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
