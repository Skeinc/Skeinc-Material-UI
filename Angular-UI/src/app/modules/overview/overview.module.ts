import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./overview.component";
import { TextFieldModule } from "../../shared/components/text-field/text-field.module";
import { PasswordFieldModule } from "../../shared/components/password-field/password-field.module";
import { PhoneFieldModule } from "../../shared/components/phone-field/phone-field.module";
import { SearchFieldModule } from "../../shared/components/search-field/search-field.module";
import { DropdownModule } from "../../shared/components/dropdown/dropdown.module";
import { TextareaModule } from "../../shared/components/textarea/textarea.module";
import { SwitchModule } from "../../shared/components/switch/switch.module";
import { CodeFieldModule } from "../../shared/components/code-field/code-field.module";
import { ButtonModule } from "../../shared/components/button/button.module";
import { NumberFieldModule } from "../../shared/components/number-field/number-field.module";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        // Components
        TextFieldModule,
        NumberFieldModule,
        PasswordFieldModule,
        PhoneFieldModule,
        SearchFieldModule,
        DropdownModule,
        TextareaModule,
        SwitchModule,
        CodeFieldModule,
        ButtonModule,
    ],
    exports: [
        OverviewComponent,
    ]
})
export class OverviewModule {}