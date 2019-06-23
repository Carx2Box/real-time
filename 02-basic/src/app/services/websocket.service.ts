import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;

  constructor(private socket: Socket) {
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
}
