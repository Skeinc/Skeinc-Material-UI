import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./components/overview.component";
import { TextFieldModule } from "../../shared/components/text-field/text-field.module";
import { PasswordFieldModule } from "../../shared/components/password-field/password-field.module";

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
    ],
    exports: [
        OverviewComponent,
    ]
})
export class OverviewModule {}