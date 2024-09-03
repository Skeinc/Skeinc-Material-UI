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
        children: [
            {
                path: 'textfield',
                loadChildren: () => import('@modules/components/modules/text-field-demo/text-field-demo.module').then((module) => module.TextFieldDemoModule),
            }
        ],
    },
    {
        path: '**',
        redirectTo: 'overview',
    }
];