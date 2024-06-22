import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BinarySearchComponent } from './algo/binary-search/binary-search.component';
import { LinearSearchComponent } from './algo/linear-search/linear-search.component';
import { AlgoHomeComponent } from './algo/algo-home/algo-home.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    {
        path: 'algo',
        title: "Algorithm Home",
        // pathMatch: "prefix",
        children: [
            {
                path: "",
                component: AlgoHomeComponent
            },
            {
                path: "binary-search",
                component: BinarySearchComponent
            },
            {
                path: "linear-serach",
                component: LinearSearchComponent
            }
        ]
    },

];
