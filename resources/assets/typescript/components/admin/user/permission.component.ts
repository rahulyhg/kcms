import { Component } from '@angular/core';

@Component({
    selector: 'state-template',
    template: require('./permission.template.html')
})
export class PermissionComponent {
    constructor () {
        console.log('Permission Component was loaded');
    }
}