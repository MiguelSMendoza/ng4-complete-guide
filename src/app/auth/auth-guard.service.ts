import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated();
  }

  constructor(private authService: AuthService) { }

}
