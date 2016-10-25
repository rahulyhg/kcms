import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { ToolbarComponent } from "./components/ui/toolbar/toolbar.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task/task.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, {
            useHash: true
        }),
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        PageNotFoundComponent,
        HomeComponent,
        TaskComponent
    ],
    providers: [
        TaskService
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}
