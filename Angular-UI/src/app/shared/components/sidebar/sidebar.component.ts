import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SIDEBAR_ITEMS } from "@shared/constants/sidebar-items.constant";
import { SidebarItem } from "@shared/interfaces/sidebar/sidebar-item.interface";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('smoothAnimation', [
            state('hidden', style({
                width: '60px',
                overflow: 'hidden',
            })),
            state('visible', style({
                width: '260px',
                overflow: 'hidden',
            })),
            transition('hidden <=> visible', [
                animate('300ms ease-in-out')
            ]),
        ])
    ],
})
export class SidebarComponent {
    // Переменная хранит в себе конфигурацию для элементов меню
    public sidebarItems: SidebarItem[] = SIDEBAR_ITEMS;

    // Переменная обозначает скрыто ли меню
    public sidebarHidden: boolean = false;

    // Метод для смены видимости меню
    public toggleSidebarVisible(): void {
        this.sidebarHidden = !this.sidebarHidden;
    }
}