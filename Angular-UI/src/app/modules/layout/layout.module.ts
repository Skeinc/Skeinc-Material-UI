import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { SidebarModule } from "@shared/components/sidebar/sidebar.module";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterOutlet,
        TranslateModule,
        // Components
        SidebarModule,
    ],
    exports: [
        LayoutComponent,
    ]
})
export class LayoutModule {}