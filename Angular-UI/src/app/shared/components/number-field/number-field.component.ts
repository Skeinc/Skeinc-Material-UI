import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Subject } from "rxjs";
import { NumberFieldInterface } from "../../interfaces/components/number-field.interface";

@Component({
    selector: 'ui-number-field',
    templateUrl: './number-field.component.html',
    styleUrl: './number-field.component.scss',
})
export class NumberFieldComponent {
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
    @Input() config?: NumberFieldInterface;

    // Входной параметр: тип компонента
    @Input() elementType?: 'small' | 'medium' | 'large';

    // Метод проверяет, что вводятся только цифры
    public isNumericInput(event: KeyboardEvent): boolean {
        // Разрешаем: цифры, точку, знак минуса, клавишу Delete, клавишу Backspace, клавиши со стрелками, клавишу Tab
        const allowedKeys = ['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];

        if (allowedKeys.includes(event.key)) {
            return true;
        }

        // Разрешаем цифры
        if (/^\d$/.test(event.key)) {
            return true;
        }

        // Разрешаем точку (.) если её ещё нет в строке ввода
        if (event.key === '.') {
            const inputElement = event.target as HTMLInputElement;
            if (inputElement && inputElement.value.indexOf('.') === -1) {
                return true;
            }
        }

        // Разрешаем минус (-) только в начале строки
        if (event.key === '-') {
            const inputElement = event.target as HTMLInputElement;
            if (inputElement && inputElement.value.length === 0) {
                return true;
            }
        }

        // Запрещаем любые другие символы
        return false;
    };
}