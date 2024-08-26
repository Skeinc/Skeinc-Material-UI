import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SidebarItem } from "@shared/interfaces/sidebar/sidebar-item.interface";

@Component({
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html',
    styleUrl: './sidebar-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent {
    // Входной параметр: данные элемента бокового меню
    @Input() sidebarItem: SidebarItem | null = null;
}