import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
    private loggedIn = false;
 
    constructor(private http: Http, private router:Router) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(
                '/authenticate', 
                JSON.stringify({ email, password }), 
                { headers }
            )
            .map(res => res.json())
            .map((res) => {
                if (res.token) {
                    localStorage.setItem('auth_token', res.token);
                    this.loggedIn = true;
                }
                return res.token;
            });
    }
    
    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this.router.navigate(['/login']);
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    getUsers(){
        return this.http.get('api/users' + '?token=' + localStorage.getItem('auth_token'))
            .map(res => res.json());
    }
}