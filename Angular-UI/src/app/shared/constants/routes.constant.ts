import { Routes } from "@angular/router";
import { ApplicationComponent } from "../../modules/application/components/application.component";
import { OverviewComponent } from "../../modules/overview/components/overview.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: ApplicationComponent,
    },
    {
        path: 'overview',
        component: OverviewComponent,
    },
    {
        path: '**',
        redirectTo: '/overview',
    }
];