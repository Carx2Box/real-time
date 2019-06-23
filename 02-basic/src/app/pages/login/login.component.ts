import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  constructor(
    public websocketService: WebsocketService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.name.trim().length === 0) {
      return;
    }

    this.websocketService.login(this.name)
    .then( (res) =>  {
      console.log(res);
      this.router.navigate(['/', 'messages']);
    });
  }
}
