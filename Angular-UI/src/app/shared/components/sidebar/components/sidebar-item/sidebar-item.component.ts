import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";
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
    constructor (
        private router: Router,
    ) {}

    // Входной параметр: данные элемента бокового меню
    @Input() sidebarItem: SidebarItem | null = null;

    // Входной параметр: является ли элемент меню скрытым
    @Input() hiddenItem: boolean = false;

    // Переменная, контролирующая видимость дочерних элементов меню
    public subItemsVisible: boolean = false;

    // Метод для смены значения видимости дочерних элементов меню
    private toogleSubItemsVisible(): void {
        if(!this.hiddenItem) {
            this.subItemsVisible = !this.subItemsVisible;
        }
    }

    // Метод для переадресации на маршрут элемента
    private redirectToRoute(route: string): void {
        this.router.navigateByUrl(route);
    }

    // Метод для обработки нажатия на элемент меню
    public sidebarItemHandler(route: string): void {
        this.sidebarItem && this.sidebarItem.children.length ? this.toogleSubItemsVisible() : this.redirectToRoute(route);
    }
}