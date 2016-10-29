import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private toastyService:ToastyService,
                private auth: AuthService, 
                private router: Router) { 
        //
    }
    canActivate(
        next:  ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {        
        var notAuthenticated:ToastOptions = {
            title: 'Access Denied',
            msg: 'Authentication required !',
            showClose: true,
            timeout: 2000,
            theme: 'material'
        };
        if (this.auth.isAuthenticated()) { 
            /// --- It's depend on you
            if(next){console.log(next.url)}
            if(state){console.log(state.url)}
            return true; 
        }
        this.toastyService.error(notAuthenticated);
        this.router.navigateByUrl('login');
        return false;
    }
}