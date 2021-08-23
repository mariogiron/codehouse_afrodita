import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  logout() {
    //primer paso - vaciar localStorage
    localStorage.removeItem('logado');
    //redirecionar a login
    this.router.navigate(['/login']);
  }
}
