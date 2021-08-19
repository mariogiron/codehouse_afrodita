import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  getLanguage($event: any) {
    const idioma = $event.target.value;
    if (idioma !== "") {
      this.router.navigate(['/lang', idioma]);
    } else {
      this.router.navigate(['/lang', 'es']);
    }

  }
}
