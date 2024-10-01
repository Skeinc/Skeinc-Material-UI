import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, Input, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { SidebarItem } from "@shared/interfaces/menu/sidebar/sidebar-item.interface";
import { SidebarService } from "@shared/services/sidebar/sidebar.service";
import { Subject } from "rxjs";

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
export class SidebarItemComponent implements OnDestroy {
    constructor (
        private sidebarService: SidebarService,
        private router: Router,
    ) {}

    // Subject для отмены подписок при уничтожении компонента
    private onDestroy$: Subject<void> = new Subject<void>;

    // Входной параметр: данные элемента бокового меню
    @Input() sidebarItem: SidebarItem | null = null;

    // Входной параметр: является ли элемент меню скрытым
    @Input() hiddenItem: boolean = false;

    // Входной параметр: является ли элемент меню дочерним
    @Input() childItem: boolean = false;

    // Переменная, контролирующая видимость дочерних элементов меню
    public subItemsVisible: boolean = false;

    // Хук жизненного цикла для очистки ресурсов при уничтожении компонента
    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // Метод для смены значения видимости дочерних элементов меню
    private toggleSubItemsVisible(): void {
        if(this.hiddenItem) {
            this.sidebarService.toggleSidebarVisible();
        }

        this.subItemsVisible = !this.subItemsVisible;
    }

    // Метод для переадресации на маршрут элемента
    private redirectToRoute(route: string): void {
        this.router.navigateByUrl(route);
    }

    // Метод для обработки нажатия на элемент меню
    public sidebarItemHandler(route: string): void {
        (this.sidebarItem && this.sidebarItem.children.length === 0) ? this.redirectToRoute(route) : this.toggleSubItemsVisible();
    }
}