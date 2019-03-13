import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
//ng g guard guards/auth
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService
    , private router: Router) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn.getValue()) {
      return true;
    } else {
      return this.router.navigate(['auth']).then(() => false);
    }
  }
}
