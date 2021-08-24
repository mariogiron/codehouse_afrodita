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
        id: 1,
        name: "Juan Antonio",
        surname: "Pérez",
        age: 39,
        phone: 915556677,
        user: "juanan",
        pass: "12345"
      },
      {
        id: 2,
        name: "Mario",
        surname: "Girón",
        age: 37,
        phone: 916668855,
        user: "mario",
        pass: "23456"
      },
      {
        id: 3,
        name: "Lucia",
        surname: "Lopez",
        age: 30,
        phone: 916543218,
        user: "lucia",
        pass: "000000"
      }
    ]
  }

  checkUser({ user, pass }: any): any {

    const listaUser = this.arrUser.filter(usuario => usuario.user === user && usuario.pass === pass)

    if (listaUser.length !== 0) {
      localStorage.setItem('logado', String(listaUser[0].id));
      return { estado: 'ok', id: listaUser[0].id };
    } else {
      return { estado: 'Usuario no existe' };
    }

  }

  getById(pId: number): User | undefined {
    return this.arrUser.find(user => user.id === pId)
  }

}
