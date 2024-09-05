import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { LanguageCodeEnum } from "@shared/enums/language/language.enum";
import { TextFieldConfig } from "@shared/interfaces/material-ui/text-field/text-field.config";
import { LanguageService } from "@shared/services/language/language.service";
import { generateRandomID } from "@shared/utilities/generate-random-id.util";
import { generateRandomName } from "@shared/utilities/generate-random-name.util";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrl: './text-field.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent implements OnInit, OnDestroy {
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

    // Выходной параметр: Обработка изменения значения
    @Output() elementValueChange = new EventEmitter<string>();

    // Входной параметр: Размер элемента
    @Input() elementSize: 'small' | 'medium' | 'big' = 'medium';

    // Входной параметр: ID элемента
    @Input() elementID?: string;

    // Входной параметр: Name элемента
    @Input() elementName?: string;

    // Входной параметр: Placeholder элемента
    @Input() elementPlaceholder?: string;

    // Входной параметр: Label элемента
    @Input() elementLabel?: string;

    // Входной параметр: Value элемента
    @Input() elementValue: string = '';

    // Входной параметр: Maxlenght элемента
    @Input() elementMaxlenght?: number;

    // Входной параметр: Required
    @Input() elementRequired?: boolean = false;

    // Входной параметр: Readonly
    @Input() elementReadonly?: boolean = false;

    // Входной параметр: Disable
    @Input() elementDisable?: boolean = false;

    // Входной параметр: Valid
    @Input() elementValid?: boolean = false;

    // Входной параметр: Invalid
    @Input() elementInvalid?: boolean = false;

    // Входной параметр: Действие контроллера
    @Input() elementAction?: () => void;

    // Входной параметр: конфигурация элемента
    @Input() elementConfig?: TextFieldConfig;

    // Текущий язык системы
    private currentLanguage: LanguageCodeEnum = LanguageCodeEnum.EN;

    ngOnInit(): void {
        if(!this.elementID && !this.elementName) {
            this.elementID = generateRandomID('text-field');
            this.elementName = generateRandomName('text-field');
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // Метод для отслеживания ввода символов
    public onValueChange(value: string): void {
        if (this.elementMaxlenght && value.length > this.elementMaxlenght) {
            // Обрезаем значение до максимального количества символов
            value = value.substring(0, this.elementMaxlenght);
        }

        // Эмитим обновленное значение
        this.elementValueChange.emit(value);
    }
}