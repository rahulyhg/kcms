import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'toolbar',
    template: require('./toolbar.template.html'),
    providers: [ UserService ]

})
export class ToolbarComponent {
    constructor (private auth: UserService) {
        console.log('Toolbar Component was loaded');
    }

    logout(){
        this.auth.logout();
    }
}