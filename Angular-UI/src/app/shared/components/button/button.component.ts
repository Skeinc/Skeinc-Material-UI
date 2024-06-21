import { Component, Input } from "@angular/core";
import { ButtonInterface } from "../../interfaces/components/button.interface";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    // Входной параметр: ID элемента
    @Input() elementID?: string | null = null;

    // Входной параметр: Name элемента
    @Input() elementName?: string | null = null;

    // Входной параметр: Label элемента
    @Input() elementLabel?: string  | null = null;

    // Входной параметр: отключена ли кнопка
    @Input() elementDisable?: boolean;

    // Входной параметр: иконка кноки
    @Input() elementIconPath?: string;

    // Входной параметр: конфигурация компонента
    @Input() config?: ButtonInterface;
}