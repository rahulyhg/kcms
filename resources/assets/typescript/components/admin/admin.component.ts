import { Component } from '@angular/core';

@Component({
    selector: 'state-template',
    template: require('./admin.template.html'),
})
export class AdminComponent {
    constructor () {
        console.log('Admin Component was loaded');
    }
}