import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot
 } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(public websocketService: WebsocketService,
              private router: Router) { }

  canActivate(): Promise<boolean> {

    return new Promise((resolve) => {

      if (!this.websocketService.getUser()){
        this.router.navigateByUrl('/');
        resolve(false);
      }

      resolve(true);
    });
  }
}
