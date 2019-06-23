import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  public user: User;

  constructor(private socket: Socket) {
    this.loadStorage();
    this.checkStatus();
   }

  checkStatus() {
    this.socket.on('connect', () =>  {
      console.log('connect to server');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () =>  {
      console.log('disconnect to server');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: any) {
    // emit ('event', payload, callback?)

    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent(event);
  }

  login(name: string) {

    return new Promise((resolve, reject)=>  {
      this.emit('login-user', {name}, res =>  {
        this.user = new User(name);
        this.saveStorage();
        resolve(res);
      });
    });
  }

  getUser() {
    return this.user;
  }

  saveStorage() {
    localStorage.setItem('user', btoa(JSON.stringify(this.user)));
  }

  loadStorage() {
    const storageUser = localStorage.getItem('user');
    if (storageUser) {
      this.user = JSON.parse(atob(storageUser));
      this.login(this.user.name);
    }
  }


}
