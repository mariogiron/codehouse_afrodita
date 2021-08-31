import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url: string = ""
  token: any;
  existToken: boolean = false;
  constructor(
    private usersServices: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('user-token');
    this.existToken = (this.token !== null) ? true : false;
  }

  async obtenerPremio() {
    const response = await this.usersServices.getPremio(this.token);
    const mitad = response.success.split(": ")[1];
    this.url = mitad.split(" ")[0].trim();

  }

}
