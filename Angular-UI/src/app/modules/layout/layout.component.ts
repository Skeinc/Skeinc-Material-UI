import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { LanguageCodeEnum } from "@shared/enums/language/language.enum";
import { LanguageService } from "@shared/services/language/language.service";
import { takeUntil, Subject } from "rxjs";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnDestroy{
    constructor (
        private languageService: LanguageService,
        private cdr: ChangeDetectorRef,
    ) {
        // Определяем текущий язык в CRM
        this.currentLanguage = languageService.getLanguage();

        // Отслеживаем изменение языка
        this.languageService.language$.pipe(takeUntil(this.onDestroy$)).subscribe((language: LanguageCodeEnum) => {
            this.currentLanguage = language;

            this.cdr.markForCheck();
        });
    }

    // Subject для отслеживания уничтожения компонента
    private onDestroy$: Subject<void> = new Subject<void>();

    // Текущий язык системы
    private currentLanguage: LanguageCodeEnum = LanguageCodeEnum.EN;

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}