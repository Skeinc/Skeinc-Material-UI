import { Component, Input } from "@angular/core";
import { PasswordFieldInterface } from "../../interfaces/components/password-field.interface";

@Component({
    selector: 'app-password-field',
    templateUrl: './password-field.component.html',
    styleUrl: './password-field.component.scss',
})
export class PasswordFieldComponent {
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
    @Input() config?: PasswordFieldInterface;

    // Переменная, контролирующая видимость пароля
    isVisiblePassword: boolean = false;

    // Метод для смены видимости пароля
    togglePasswordVisible(): void {
        if(!this.elementDisable) {
            this.isVisiblePassword = !this.isVisiblePassword;
        }
    }
}