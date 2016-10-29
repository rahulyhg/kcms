import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';
import { User } from '../../models/User';
 
@Component({
    selector: 'login-form',
    template: require('./auth.template.html')
})
 
export class AuthComponent implements OnInit {
    user: any = {};
    loading = false;
    error = '';
 
    constructor(
            private auth: AuthService,
            private router: Router,
            ) 
    { 
        console.log('Login component started !');
    }
 
    ngOnInit() {
        //
    }
    login() {
        this.auth.login(this.user)
            .subscribe({
                error: (err: any) => console.log(err),
                complete: () => this.router.navigateByUrl('admin')
            });
    }
}