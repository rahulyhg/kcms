import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
