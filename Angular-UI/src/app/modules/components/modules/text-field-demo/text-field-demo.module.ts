import { NgModule } from "@angular/core";
import { TextFieldDemoComponent } from "./text-field-demo.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { TextFieldModule } from "@shared/components/material-ui/text-field/text-field.module";

@NgModule({
    declarations: [
        TextFieldDemoComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
        // Components
        TextFieldModule,
    ],
    exports: [
        TextFieldDemoComponent,
    ]
})
export class TextFieldDemoModule {}