import { NgModule } from "@angular/core";
import { ComponentsComponent } from "./components.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        ComponentsComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [
        ComponentsComponent,
    ]
})
export class ComponentsModule {}