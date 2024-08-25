import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./overview.component";
import { TranslateModule } from "@ngx-translate/core";
import { SidebarModule } from "@shared/components/sidebar/sidebar.module";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
        // Components
        SidebarModule,
    ],
    exports: [
        OverviewComponent,
    ]
})
export class OverviewModule {}