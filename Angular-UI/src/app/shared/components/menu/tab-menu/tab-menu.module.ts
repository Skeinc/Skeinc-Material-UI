import { NgModule } from "@angular/core";
import { TabMenuComponent } from "./tab-menu.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        TabMenuComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [
        TabMenuComponent,
    ]
})
export class TabMenuModule {}