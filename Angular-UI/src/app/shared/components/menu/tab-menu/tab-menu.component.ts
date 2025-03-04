import { ChangeDetectionStrategy, Component, Input, OnDestroy } from "@angular/core";
import { TabMenuItemInterface } from "@shared/interfaces/menu/tab-menu/tab-menu-items.interface";
import { Subject } from "rxjs";

@Component({
    selector: 'app-tab-menu',
    templateUrl: './tab-menu.component.html',
    styleUrl: './tab-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabMenuComponent implements OnDestroy {
    // Входной параметр: элементы компоненты
    @Input() elementTabs: TabMenuItemInterface[] = [];
    // Входной параметр: выбранный индекс
    @Input() selectedTabIndex?: number | null = 0;

    // Subject для отслеживания уничтожения компонента
    private onDestroy$: Subject<void> = new Subject<void>();

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // Метод для выбора раздела
    public selectTab(index: number): void {
        this.selectedTabIndex = index;
    }
}