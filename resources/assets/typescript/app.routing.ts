import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuard } from './_guards/auth.guard';
//Import components
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthComponent } from "./components/user/auth.component";
import { TaskComponent } from "./components/task/task.component";
//Import other route file
import { adminRoutes } from './components/admin/admin.routing';

export const CLIENT_ROUTER_PROVIDERS = [
    AuthGuard
];

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: AuthComponent
    },
    ...adminRoutes,
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

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);