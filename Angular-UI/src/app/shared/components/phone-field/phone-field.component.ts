import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PHONE_NUMBER_PATTERNS } from "../../constants/phone-number-patterns.constant";
import { PhoneFieldInterface } from "../../interfaces/components/phone-field.interface";
import { Subject } from "rxjs";

@Component({
    selector: 'app-phone-field',
    templateUrl: './phone-field.component.html',
    styleUrl: './phone-field.component.scss',
})
export class PhoneFieldComponent {
    private onDestroy$: Subject<void> = new Subject<void>();

    @Output() elementValueChange = new EventEmitter<string>();

    // ID элемента
    @Input() elementID?: string | null = null;

    // Name элемента
    @Input() elementName?: string | null = null;

    // Label элемента
    @Input() elementLabel?: string  | null = null;

    // Caption элемента
    @Input() elementCaption?: string  | null = null;

    // Value элемента
    @Input() elementValue?: string  | null = null;

    // Placeholder элемента
    @Input() elementPlaceholder?: string  | null = null;

    // Required параметр элемента
    @Input() elementRequired?: boolean;

    // Readonly параметр элемента
    @Input() elementReadonly?: boolean;

    // Disable параметр элемента
    @Input() elementDisable?: boolean;

    // Valid параметр элемента
    @Input() elementValid?: boolean;

    // Конфигурация компонента
    @Input() config?: PhoneFieldInterface;

    // Входной параметр: тип компонента
    @Input() elementType?: 'small' | 'medium' | 'large';

    // Паттерны телефоных номеров различных стран
    phoneNumberPatterns: string[] = PHONE_NUMBER_PATTERNS;

    // Метод для обработки ввода
    public onInputHandler(event: any) {
        const inputValue = (event.target as HTMLInputElement).value;
        
        this.elementValueChange.emit(inputValue);
    };
}