import { NgModule } from "@angular/core";
import { TextFieldComponent } from "./text-field.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        TextFieldComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [
        TextFieldComponent,
    ],
})
export class TextFieldModule {}