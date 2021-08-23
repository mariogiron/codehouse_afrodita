import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  recogerDatosForm(pForm: any) {
    const estadoLogin = this.usersService.checkUser(pForm.value);
    if (estadoLogin !== 'ok') {
      alert(estadoLogin);
    } else {
      this.router.navigate(['/profile']);
    }
  }

}
