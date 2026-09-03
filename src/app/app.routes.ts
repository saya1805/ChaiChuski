import { Routes } from '@angular/router';
import { UserAuthComponent } from './Auth/user-auth/user-auth.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
    },
    {
        path:'userAuth',
        component:UserAuthComponent
    },
    {
        path:'sidebar',
        component:SidebarComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }
];
