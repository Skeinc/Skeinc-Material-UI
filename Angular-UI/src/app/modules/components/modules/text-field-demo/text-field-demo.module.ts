import { NgModule } from "@angular/core";
import { TextFieldDemoComponent } from "./text-field-demo.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { TextFieldModule } from "@shared/components/formatting/text-field/text-field.module";
import { RouterModule } from "@angular/router";
import { TabMenuModule } from "@shared/components/menu/tab-menu/tab-menu.module";

@NgModule({
    declarations: [
        TextFieldDemoComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
        RouterModule.forChild([{path: '', component: TextFieldDemoComponent}]),
        // Components
        TabMenuModule,
        TextFieldModule,
    ],
    exports: [
        TextFieldDemoComponent,
    ]
})
export class TextFieldDemoModule {}