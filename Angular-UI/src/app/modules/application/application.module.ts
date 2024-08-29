import { NgModule } from "@angular/core";
import { ApplicationComponent } from "./application.component";
import { LayoutModule } from "@modules/layout/layout.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ApplicationComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        // Modules
        LayoutModule,
    ],
    exports: [
        ApplicationComponent,
    ]
})
export class ApplicationModule {}