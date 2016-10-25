import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { TaskComponent } from "./components/task/task.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tasks',
        component: TaskComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
