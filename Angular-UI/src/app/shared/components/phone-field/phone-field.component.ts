import { Component, Input } from "@angular/core";
import { PhoneFieldInterface } from "../../interfaces/components/phone-field.interface";
import { PHONE_NUMBER_PATTERNS } from "../../constants/phone-number-patterns.constant";

@Component({
    selector: 'app-phone-field',
    templateUrl: './phone-field.component.html',
    styleUrl: './phone-field.component.scss',
})
export class PhoneFieldComponent {
    // Конфигурация компонента
    @Input() config!: PhoneFieldInterface;

    // Паттерны телефоных номеров различных стран
    phoneNumberPatterns: string[] = PHONE_NUMBER_PATTERNS;
}