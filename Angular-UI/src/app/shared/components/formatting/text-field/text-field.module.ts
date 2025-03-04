import { NgModule } from "@angular/core";
import { TextFieldComponent } from "./text-field.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TextFieldComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
    ],
    exports: [
        TextFieldComponent,
    ],
})
export class TextFieldModule {}