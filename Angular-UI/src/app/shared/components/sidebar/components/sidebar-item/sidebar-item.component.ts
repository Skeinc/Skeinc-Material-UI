import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SidebarItem } from "@shared/interfaces/sidebar/sidebar-item.interface";

@Component({
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html',
    styleUrl: './sidebar-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('smoothAnimation', [
            state('hidden', style({
                height: '0',
                overflow: 'hidden',
                opacity: 0,
            })),
            state('visible', style({
                height: '*',
                overflow: 'hidden',
                opacity: 1,
            })),
            transition('hidden <=> visible', [
                animate('300ms ease-in-out')
            ]),
        ])
    ],
})
export class SidebarItemComponent {
    // Входной параметр: данные элемента бокового меню
    @Input() sidebarItem: SidebarItem | null = null;

    // Переменная, контролирующая видимость дочерних элементов меню
    public subItemsVisible: boolean = false;

    // Метод для смены значения видимости дочерних элементов меню
    public toogleSubItemsVisible(): void {
        this.subItemsVisible = !this.subItemsVisible;
    }
}