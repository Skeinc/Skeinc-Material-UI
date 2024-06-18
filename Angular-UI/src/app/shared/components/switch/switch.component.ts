import { Component, Input } from "@angular/core";
import { SwitchInterface } from "../../interfaces/components/switch.interface";

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrl: './switch.component.scss',
})
export class SwitchComponent {
    // ID элемента
    @Input() elementID?: string | null = null;

    // Value элемента
    @Input() elementValue!: boolean;

    // Disable параметр элемента
    @Input() elementDisable?: boolean;

    // Конфигурация для элемента
    @Input() config?: SwitchInterface; 

    // Входной параметр: тип компонента
    @Input() elementType?: 'small' | 'medium' | 'large';

    // Изменяем значение элемента
    public toggleSwitchValue(): void {
        this.elementValue = !this.elementValue;
    };
}