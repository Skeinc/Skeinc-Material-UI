import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./overview.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [
        OverviewComponent,
    ]
})
export class OverviewModule {}