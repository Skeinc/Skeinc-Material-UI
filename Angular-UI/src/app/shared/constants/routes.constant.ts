import { Routes } from "@angular/router";
import { GeneralComponent } from "../../modules/general/components/general.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: GeneralComponent,
    },
    {
        path: '**',
        redirectTo: '/',
    }
];