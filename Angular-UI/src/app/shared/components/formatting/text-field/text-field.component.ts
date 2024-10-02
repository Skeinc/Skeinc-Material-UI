import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TextFieldConfig } from "@shared/interfaces/formatting/text-field/text-field.config";
import { generateRandomID } from "@shared/utilities/generate-random-id.util";
import { generateRandomName } from "@shared/utilities/generate-random-name.util";
import { Subject } from "rxjs";

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrl: './text-field.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent implements OnInit {
    constructor (
        private cdr: ChangeDetectorRef,
    ) {}

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
    @Input() elementAction?: () => any;

    // Входной параметр: Название контроллера
    @Input() elementActionName?: string;

    // Входной параметр: Подсказка
    @Input() elementHelper?: string;

    // Входной параметр: конфигурация элемента
    @Input() elementConfig?: TextFieldConfig;

    ngOnInit(): void {
        if(!this.elementID && !this.elementName) {
            this.elementID = generateRandomID('text-field');
            this.elementName = generateRandomName('text-field');
        }
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

    // Метод, который может вызываться при необходимости
    public onAction(): void {
        if (this.elementAction) {
            this.elementAction();
        }
    }
}