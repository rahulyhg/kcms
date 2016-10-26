import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthenticationService } from '../../services/user/auth.service';
 
@Component({
    selector: 'login-form',
    template: require('./auth.template.html'),
    providers: [AuthenticationService]
})
 
export class AuthComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { 
            console.log('Login loaded !');
        }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(result => {
                if (result.token !== null) {
                    // login successful
                    this.loading = false;
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    this.loading = false;
                    this.error = 'Email or password is incorrect';
                }
            });
    }
}