import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent } from './dashboard/dashboard.component';

export const ROUTES: Routes = [
    {path: '',  pathMatch: 'full'},
    {path: '', component: DashboardComponent, pathMatch: 'full'}
    // {path: 'upload', component: UploadfileComponent},
    // {path: 'multiselect', component: MultiselectComponent}
];
