import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { AuthService } from 'ng2-ui-auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class UserService {
    private token: string = '';
 
    constructor(private auth:AuthService, private http: Http, private router:Router) {
        this.token = this.auth.getToken();
    }

    getUsers(){
        return this.http.get('api/users' + '?token=' + this.token)
            .map(res => res.json());
    }

    logout(){
        this.token = this.auth.getToken();
        this.auth.logout();
        if(!this.auth.isAuthenticated()){
            this.router.navigateByUrl('login');
        }else{
            console.log('logout error !');
        }
    }
}