import { Component } from '@angular/core';

@Component({
<<<<<<< HEAD
    selector: 'toolbar',
    template: require('./toolbar.template.html')
=======
    'selector': 'toolbar',
    'template': require('./toolbar.template.html')
>>>>>>> f4bda0dcabf1138dc9eb349dba25aab0b346e649
})
export class ToolbarComponent {
    constructor () {
        console.log('Toolbar Component was loaded');
    }
}