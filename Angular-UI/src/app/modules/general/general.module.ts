import { NgModule } from "@angular/core";
import { GeneralComponent } from "./components/general.component";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [
        GeneralComponent,
    ],
    imports: [
        RouterOutlet,
    ],
    exports: [
        GeneralComponent,
    ]
})
export class GeneralModule {}