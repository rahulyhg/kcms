import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
<<<<<<< HEAD
import { TaskComponent } from "./components/task/task.component";
=======
>>>>>>> f4bda0dcabf1138dc9eb349dba25aab0b346e649

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
<<<<<<< HEAD
    },
    {
        path: 'tasks',
        component: TaskComponent
=======
>>>>>>> f4bda0dcabf1138dc9eb349dba25aab0b346e649
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
