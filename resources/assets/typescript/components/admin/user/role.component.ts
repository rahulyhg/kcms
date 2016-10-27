import { Component } from '@angular/core';

@Component({
    selector: 'state-template',
    template: require('./role.template.html')
})
export class RoleComponent {
    constructor () {
        console.log('Role Component was loaded');
    }
}