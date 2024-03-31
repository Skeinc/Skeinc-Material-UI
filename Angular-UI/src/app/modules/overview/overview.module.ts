import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./components/overview.component";
import { TextFieldModule } from "../../shared/components/text-field/text-field.module";
import { PasswordFieldModule } from "../../shared/components/password-field/password-field.module";
import { PhoneFieldModule } from "../../shared/components/phone-field/phone-field.module";
import { SearchFieldModule } from "../../shared/components/search-field/search-field.module";
import { DropdownModule } from "../../shared/components/dropdown/dropdown.module";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        // Components
        TextFieldModule,
        PasswordFieldModule,
        PhoneFieldModule,
        SearchFieldModule,
        DropdownModule,
    ],
    exports: [
        OverviewComponent,
    ]
})
export class OverviewModule {}