import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router, UrlSegment} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { take, tap, switchMap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private authService: AuthService,
              private router: Router
    ) {}

  canActivate(route: ActivatedRouteSnapshot, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.userIsAuthenticated.pipe(
      take(1),
      switchMap(isAuthenticated => {
        if (!isAuthenticated) {
          return this.authService.autoLogin();
        } else {
          return of(isAuthenticated);
        }
      }),
      tap(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigateByUrl('home');
      }
    }));
  }

}
