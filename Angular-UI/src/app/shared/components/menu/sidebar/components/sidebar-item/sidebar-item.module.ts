import { NgModule } from "@angular/core";
import { SidebarItemComponent } from "./sidebar-item.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        SidebarItemComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [
        SidebarItemComponent,
    ],
})
export class SidebarItemModule {}