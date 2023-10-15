import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, booleanAttribute, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private authService: AuthserviceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated:boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }
  }









