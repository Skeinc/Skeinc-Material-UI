import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { TabMenuItemsInterface } from "@shared/interfaces/menu/tab-menu/tab-menu-items.interface";

@Component({
    selector: 'app-tab-menu',
    templateUrl: './tab-menu.component.html',
    styleUrl: './tab-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabMenuComponent {
    // Входной параметр: элементы компоненты
    @Input() elementTabs: TabMenuItemsInterface[] = [];

    // Входной параметр: выбранный индекс
    @Input() selectedTabIndex?: number | null = 0;

    // Метод для выбора раздела
    public selectTab(index: number): void {
        this.selectedTabIndex = index;
    }
}