import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  arrUser: User[];

  constructor() {
    this.arrUser = [
      {
        name: "Juan Antonio",
        surname: "Pérez",
        age: 39,
        phone: 915556677,
        user: "juanan",
        pass: "12345"
      },
      {
        name: "Mario",
        surname: "Girón",
        age: 37,
        phone: 916668855,
        user: "mario",
        pass: "23456"
      },
      {
        name: "Lucia",
        surname: "Lopez",
        age: 30,
        phone: 916543218,
        user: "lucia",
        pass: "000000"
      }
    ]
  }

  checkUser({ user, pass }: any): string {

    const listaUser = this.arrUser.filter(usuario => usuario.user === user && usuario.pass === pass)

    if (listaUser.length !== 0) {
      localStorage.setItem('logado', 'ok');
      return 'ok';
    } else {
      return 'Usuario no existe';
    }

  }
}
