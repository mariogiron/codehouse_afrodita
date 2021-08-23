import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  login: Boolean = false;
  ngOnInit() { }

  ngDoCheck() {
    this.login = (localStorage.getItem('logado') !== 'ok') ? false : true;
  }
}
