import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate() {
    console.log('paso por el guard');
    if (localStorage.getItem('logado') !== null) {
      return true;
    } else {
      return false;
    }

  }
}

