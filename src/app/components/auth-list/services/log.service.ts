import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  userDaniel = {
    name: 'Daniel',
    password: '123456',
  };

  constructor() {}

  checkValidLogIn(userName: string, password: string) {
    if (
      userName === this.userDaniel.name &&
      password === this.userDaniel.password
    ) {
      localStorage.setItem('cookie', 'my_jwt');
    } else {
      alert('Wrong login information');
    }
  }

  isLoggedIn(): string | null {
    return localStorage.getItem('cookie');
  }
}
