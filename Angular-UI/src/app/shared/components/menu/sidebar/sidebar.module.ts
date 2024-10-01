import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { SidebarItemModule } from "./components/sidebar-item/sidebar-item.module";

@NgModule({
    declarations: [
        SidebarComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
        // Components
        SidebarItemModule,
    ],
    exports: [
        SidebarComponent,
    ],
})
export class SidebarModule {}