import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { SIDEBAR_ITEMS } from "@shared/constants/sidebar/sidebar-items.constant";
import { SidebarItemInterface } from "@shared/interfaces/menu/sidebar/sidebar-item.interface";
import { SidebarService } from "@shared/services/sidebar/sidebar.service";
import { Subject, takeUntil } from "rxjs";

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
export class SidebarComponent implements OnInit, OnDestroy {
    constructor (
        private readonly sidebarService: SidebarService,
    ) {}

    // Subject для отмены подписок при уничтожении компонента
    private onDestroy$: Subject<void> = new Subject<void>;
    // Переменная хранит в себе конфигурацию для элементов меню
    public sidebarItems: SidebarItemInterface[] = SIDEBAR_ITEMS;
    // Переменная обозначает видимость меню
    public sidebarVisible: boolean = true;

    // Хук жизненного цикла для инициализации компонента
    ngOnInit(): void {
        this.syncSidebarVisible();

        this.subscribeSidebarVisible();
    }

    // Хук жизненного цикла для очистки ресурсов при уничтожении компонента
    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // Метод для смены видимости меню
    public toggleSidebarVisible(): void {
        this.sidebarService.toggleSidebarVisible();
    }

    // Метод для синхронизации видимости меню с локальным хранилищем
    private syncSidebarVisible(): void {
        const localStorageSidebarVisible: boolean = localStorage.getItem('sidebarVisible') === 'open';

        if(this.sidebarVisible !== localStorageSidebarVisible) this.toggleSidebarVisible();
    }

    // Метод для подписки на изменение видимости меню
    private subscribeSidebarVisible(): void {
        this.sidebarService.sidebarVisible$.pipe(takeUntil(this.onDestroy$)).subscribe((isVisible: boolean) => {
            this.sidebarVisible = isVisible;

            localStorage.setItem('sidebarVisible', isVisible ? 'open' : 'hidden')
        });
    }
}