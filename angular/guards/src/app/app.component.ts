import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  login: Boolean = false;
  idUser: string | null = "";

  ngOnInit() { }

  ngDoCheck() {
    this.login = (localStorage.getItem('logado') !== null) ? true : false;
    if (localStorage.getItem('logado')) {
      this.idUser = localStorage.getItem('logado');
    }
  }
}
