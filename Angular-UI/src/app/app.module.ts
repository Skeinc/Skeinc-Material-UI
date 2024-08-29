import { CommonModule, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { ApplicationModule } from "./modules/application/application.module";
import { AppRoutingModule } from "./app-routing.module";
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory, MissingTranslationService } from "@shared/services/localization/localization.service";
import { LayoutModule } from "@modules/layout/layout.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        // Modules
        AppRoutingModule,
        ApplicationModule,
        // Localization
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
            useDefaultLang: false,
        }),
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }