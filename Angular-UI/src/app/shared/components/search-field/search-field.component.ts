import { Component, Input } from "@angular/core";
import { SearchFieldInterface } from "../../interfaces/components/search-field.interface";

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrl: './search-field.component.scss',
})
export class SearchFieldComponent {
    // Конфигурация компонента
    @Input() config!: SearchFieldInterface;

    // Метод обработки ввода
    onSearchField(event: any): void {
        this.config.value = event.target.value;
    }

    // Метод для очистки поля ввода
    clearSearchField(): void {
        this.config.value = '';
    }
}