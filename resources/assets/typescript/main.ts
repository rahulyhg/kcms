import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './styles';

import { AppModule } from './app.module';

// declare const PRODUCTION: boolean;
// if (PRODUCTION) {
//     enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err: any) => console.error(err));
