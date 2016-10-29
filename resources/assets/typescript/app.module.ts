import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Material Modules
import { MaterialModule } from '@angular/material';
import { Ng2MaterialModule} from "ng2-material";
//Extra UI Tools
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastyModule } from 'ng2-toasty';
import { Angular2DataTableModule } from 'angular2-data-table';
//Routes
import { routes, CLIENT_ROUTER_PROVIDERS } from './app.routing';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { MyAuthConfig } from  './config';
//import { AuthGuard } from './_guards/auth.guard';
//Main Components
import { AppComponent } from './app.component';
import { ToolbarComponent } from "./components/ui/toolbar/toolbar.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
//Administrator Components
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from './components/admin/user/user.component';
import { RoleComponent } from './components/admin/user/role.component';
import { PermissionComponent } from './components/admin/user/permission.component';
//Normal Components
import { HomeComponent } from "./components/home/home.component";
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task/task.service';
import { AuthComponent } from './components/user/auth.component';
import { UserService } from './services/user/user.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, {
            useHash: true
        }),
        Ng2UiAuthModule.getWithConfig(MyAuthConfig),
        MaterialModule.forRoot(),
        Ng2MaterialModule.forRoot(),
        ToastyModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        Angular2DataTableModule
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        PageNotFoundComponent,
        AdminComponent,
        UserComponent,
        RoleComponent,
        PermissionComponent,
        HomeComponent,
        AuthComponent,
        TaskComponent
    ],
    providers: [
        CLIENT_ROUTER_PROVIDERS,
        //AuthGuard,
        TaskService,
        UserService
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}
