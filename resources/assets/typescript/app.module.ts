import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
//Extra UI Tools
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastyModule } from 'ng2-toasty';

import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { ToolbarComponent } from "./components/ui/toolbar/toolbar.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
<<<<<<< HEAD
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task/task.service';
=======
>>>>>>> f4bda0dcabf1138dc9eb349dba25aab0b346e649

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, {
            useHash: true
        }),
        MaterialModule.forRoot(),
        ToastyModule.forRoot(),
        SlimLoadingBarModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        PageNotFoundComponent,
<<<<<<< HEAD
        HomeComponent,
        TaskComponent
    ],
    providers: [
        TaskService
=======
        HomeComponent
    ],
    providers: [
        //service here
>>>>>>> f4bda0dcabf1138dc9eb349dba25aab0b346e649
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}
