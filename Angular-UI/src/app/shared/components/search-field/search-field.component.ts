import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SearchFieldInterface } from "../../interfaces/components/search-field.interface";
import { Subject } from "rxjs";

@Component({
    selector: 'ui-search-field',
    templateUrl: './search-field.component.html',
    styleUrl: './search-field.component.scss',
})
export class SearchFieldComponent {
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
    @Input() config?: SearchFieldInterface;

    // Входной параметр: тип компонента
    @Input() elementType?: 'small' | 'medium' | 'large';

    // Метод обработки ввода
    public onSearchField(event: any): void {
        this.elementValue = event.target.value;
    };

    // Метод для очистки поля ввода
    public clearSearchField(): void {
        this.elementValue = '';
    };
}