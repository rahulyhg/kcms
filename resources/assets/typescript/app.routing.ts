import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from "./components/home/home.component";
import { AuthComponent } from "./components/user/auth.component";
import { TaskComponent } from "./components/task/task.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'tasks',
        component: TaskComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
