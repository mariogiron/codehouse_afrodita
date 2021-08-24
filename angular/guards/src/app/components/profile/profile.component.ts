import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  miUser: User | undefined;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.miUser = this.usersService.getById(Number(params.iduser))
    })
  }


  logout() {
    //primer paso - vaciar localStorage
    localStorage.removeItem('logado');
    //redirecionar a login
    this.router.navigate(['/login']);
  }
}
