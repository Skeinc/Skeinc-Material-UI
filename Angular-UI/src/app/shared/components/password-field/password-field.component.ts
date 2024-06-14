import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PasswordFieldInterface } from "../../interfaces/components/password-field.interface";
import { Subject } from "rxjs";

@Component({
    selector: 'ui-password-field',
    templateUrl: './password-field.component.html',
    styleUrl: './password-field.component.scss',
})
export class PasswordFieldComponent {
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
    @Input() config?: PasswordFieldInterface;

    // Входной параметр: тип компонента
    @Input() elementType?: 'small' | 'medium' | 'large';

    // Переменная, контролирующая видимость пароля
    public isVisiblePassword: boolean = false;

    // Метод для смены видимости пароля
    public togglePasswordVisible(): void {
        if(!this.elementDisable) {
            this.isVisiblePassword = !this.isVisiblePassword;
        };
    };
}