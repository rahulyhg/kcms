import { Component } from '@angular/core';

@Component({
    'selector': 'toolbar',
    'template': require('./toolbar.template.html')
})
export class ToolbarComponent {
    constructor () {
        console.log('Toolbar Component was loaded');
    }
}