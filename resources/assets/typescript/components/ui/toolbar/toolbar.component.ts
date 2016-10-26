import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/user/auth.service';

@Component({
    selector: 'toolbar',
    template: require('./toolbar.template.html'),
    providers:[AuthenticationService]

})
export class ToolbarComponent {
    constructor (private authenticationService: AuthenticationService) {
        console.log('Toolbar Component was loaded');
    }

    logout(){
        this.authenticationService.logout();
    }
}