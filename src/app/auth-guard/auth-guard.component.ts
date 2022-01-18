import { Component, OnInit } from '@angular/core';
//import { AuthService } from "./auth.service";
import * as auth0 from "auth0-js";

import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { map, take } from "rxjs/operators";

@Injectable({ providedIn: "root" })

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.css']
})
export class AuthGuardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class AuthGuard implements CanActivate {
  constructor(private authService: auth0, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.currentUser.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;

        if (isAuth) return true;
        if (!isAuth) return this.router.createUrlTree(["auth"]);
      })
    );
  }
}
