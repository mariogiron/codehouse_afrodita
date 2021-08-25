import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  search: string = "";

  constructor(private router: Router) {

  }

  onClick() {
    this.router.navigate(['/search', this.search])
  }
}
