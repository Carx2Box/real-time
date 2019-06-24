import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { UserGuardService } from './guards/user-guard.service';
import { HomeComponent } from './page/home/home.component';
import { FlightsComponent } from './page/flights/flights.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights',
    component: FlightsComponent,
   },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
