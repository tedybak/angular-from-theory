import { UserServiceService } from './../services/user-service.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlwaysAuthGuardGuard implements CanActivate {
  constructor(private userServiceService: UserServiceService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userServiceService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission");
    }
  }
}
