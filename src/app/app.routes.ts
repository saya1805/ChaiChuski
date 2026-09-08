import { Routes } from '@angular/router';
import { UserAuthComponent } from './Auth/user-auth/user-auth.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaleComponent } from './sidebar/sale/sale.component';
import { ShistoryComponent } from './sidebar/shistory/shistory.component';
import { MenuItemsComponent } from './sidebar/menu-items/menu-items.component';
import { ReportComponent } from './sidebar/report/report.component';
import { ModelComponent } from './model/model.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'userAuth'
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
    },
    {
        path:'sale',
        component:SaleComponent
    },
    {
        path:'S-History',
        component:ShistoryComponent
    },
    {
        path:'menu',
        component:MenuItemsComponent
    },
    { 
        path:'report',
        component:ReportComponent
    },
    {
        path:'model',
        component:ModelComponent
    }
]; 
