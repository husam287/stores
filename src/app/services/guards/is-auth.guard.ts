import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { take } from 'rxjs/operators'
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let user = await this._userService.user$.pipe(take(1)).toPromise()
    if (user) return true;

    this.router.navigate(['/', 'login'])
    return false
  }

}
