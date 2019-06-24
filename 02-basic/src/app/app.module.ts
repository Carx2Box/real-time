import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material-module';
import 'hammerjs';

// socket IO
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './shared/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';

import { FlightsComponent } from './page/flights/flights.component';
import { SearchGeneratorComponent } from './components/search-generator/search-generator.component';

// configuration for socket IO in client
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    FooterComponent,
    UserListComponent,
    LoginComponent,
    MessagesComponent,
    NavbarComponent,
    HomeComponent,
    FlightsComponent,
    SearchGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
