import { Routes } from "@angular/router";
import { OverviewComponent } from "../../modules/overview/overview.component";
import { ComponentsComponent } from "@modules/components/components.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: OverviewComponent,
        pathMatch: 'full',
    },
    {
        path: 'overview',
        component: OverviewComponent,
        pathMatch: 'full',
    },
    {
        path: 'components',
        component: ComponentsComponent,
        pathMatch: 'full',
        children: [],
    },
    {
        path: '**',
        redirectTo: 'overview',
    }
];