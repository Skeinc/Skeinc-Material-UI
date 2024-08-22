import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./overview.component";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        OverviewComponent,
    ]
})
export class OverviewModule {}