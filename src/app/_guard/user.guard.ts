import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Auth } from '../_service/auth.service';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: Auth
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.auth.currentUserValue;
        if (currentUser && currentUser.role === 'user') {
            // authorised so return true
            return true;
        }

        // not user, redirect to dashboard page with the return url
        this.router.navigate(['/community'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}