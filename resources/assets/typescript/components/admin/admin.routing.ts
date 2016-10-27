import { Routes } from '@angular/router';
import { AuthGuard } from '../../_guards/auth.guard';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './user/role.component';
import { PermissionComponent } from './user/permission.component';

export const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/users',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/roles',
        component: RoleComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/permissions',
        component: PermissionComponent,
        canActivate: [AuthGuard]
    }
];