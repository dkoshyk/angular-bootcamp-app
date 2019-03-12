import { Injectable } from '@angular/core';
import { DEFAULT_USERS } from '../default-users';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//ng g service auth/services/auth
export class AuthService {
  defaultUser = DEFAULT_USERS;

  constructor() { }

  //BehaviorSubject and Subject
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  initUser(): void {
    if (sessionStorage.getItem('user')) {
      this.isLoggedIn.next(true);
    }
  }

  getUsers(): any {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  login(credential: { username: string, password: string }): Observable<any> {
    const loggedInUser = this.defaultUser.find(

      (user) => user.username === credential.username && user.password === credential.password
    );

    return of(loggedInUser).pipe(
      timeout(500),
      map((response) => {
        if (response) {
          sessionStorage.setItem('user', JSON.stringify(loggedInUser));

          this.setIsLoggedIn(true);
        }

        return response;
      })
    )

  }

  logout(): any {
    sessionStorage.removeItem('user');
    this.setIsLoggedIn(false);
  }

  setIsLoggedIn(loggedId: boolean): void {
    this.isLoggedIn.next(!!loggedId);
  }
}
