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
import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { ToolbarComponent } from "./components/ui/toolbar/toolbar.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task/task.service';
import { AuthComponent } from './components/user/auth.component';
import { AuthenticationService } from './services/user/auth.service';

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
        HomeComponent,
        AuthComponent,
        TaskComponent
    ],
    providers: [
        //service here
        AuthGuard, TaskService, AuthenticationService
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}
