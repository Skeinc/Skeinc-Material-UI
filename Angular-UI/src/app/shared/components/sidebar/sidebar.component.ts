import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SIDEBAR_ITEMS } from "@shared/constants/sidebar-items.constant";
import { SidebarItem } from "@shared/interfaces/sidebar/sidebar-item.interface";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
    // Переменная хранит в себе конфигурацию для элементов меню
    public sidebarItems: SidebarItem[] = SIDEBAR_ITEMS;
}