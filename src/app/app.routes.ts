import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { BinarySearchComponent } from './algo/binary-search/binary-search.component';
import { AlgoHomeComponent } from './algo/algo-home/algo-home.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: 'full' },
    { path: "dashboard", component: DashboardComponent },
    { path: "home", component: HomeComponent },
    {
        path: 'algo',
        title: "Algorithm Home",
        pathMatch: "prefix",
        // component: AlgoHomeComponent,
        children: [
            {
                path: '',
                redirectTo: '/binar-search',
                pathMatch: 'full',
            },
            {
                path: "binary-search",
                component: BinarySearchComponent
            }
        ]
    },

];
