import { Component } from '@angular/core';

@Component({
    selector: 'state-template',
    template: require('./home.template.html')
})
export class HomeComponent {
    constructor () {
        console.log('Home Component was loaded');
    }
}