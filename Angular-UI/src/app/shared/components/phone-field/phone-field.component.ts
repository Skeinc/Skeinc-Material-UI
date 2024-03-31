import { Component, Input } from "@angular/core";
import { PHONE_NUMBER_PATTERNS } from "../../constants/phone-number-patterns.constant";
import { PhoneFieldInterface } from "../../interfaces/components/phone-field.interface";

@Component({
    selector: 'app-phone-field',
    templateUrl: './phone-field.component.html',
    styleUrl: './phone-field.component.scss',
})
export class PhoneFieldComponent {
    // ID элемента
    @Input() elementID?: string | null = null;

    // Name элемента
    @Input() elementName?: string | null = null;

    // Label элемента
    @Input() elementLabel?: string  | null = null;

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

    // Паттерны телефоных номеров различных стран
    phoneNumberPatterns: string[] = PHONE_NUMBER_PATTERNS;
}