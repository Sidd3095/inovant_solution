import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: UserService,
    private router: Router) { }



    //For applying auth guard to dashboard Panel
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      ///---- check whether session is present or not----//
      var isAuthenticated = this.authService.getStatus();
      if (!isAuthenticated) {
          this.router.navigate(['/login']);
      }
      return isAuthenticated;
  }
  }


