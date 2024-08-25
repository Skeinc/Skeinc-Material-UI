import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        SidebarComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [
        SidebarComponent,
    ],
})
export class SidebarModule {}