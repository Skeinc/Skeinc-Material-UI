import { NgModule } from "@angular/core";
import { ComponentsComponent } from "./components.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [
        ComponentsComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterOutlet,
        TranslateModule,
    ],
    exports: [
        ComponentsComponent,
    ]
})
export class ComponentsModule {}