import { Component, OnInit } from '@angular/core';

import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  name: string;

  constructor(public websocketService: WebsocketService ) {
    this.name = websocketService.user.name;
   }

  ngOnInit() {
  }

  logout() {
    this.websocketService.logout();
  }
}
