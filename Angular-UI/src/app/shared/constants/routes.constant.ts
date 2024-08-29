import { Routes } from "@angular/router";
import { OverviewComponent } from "../../modules/overview/overview.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: OverviewComponent,
    },
    {
        path: 'overview',
        component: OverviewComponent,
    },
    {
        path: '**',
        redirectTo: 'overview',
    }
];