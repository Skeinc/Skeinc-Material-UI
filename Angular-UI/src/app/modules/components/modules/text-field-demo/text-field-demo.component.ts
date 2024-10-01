import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from "@angular/core";
import { TabMenuItemsInterface } from "@shared/interfaces/menu/tab-menu/tab-menu-items.interface";

@Component({
    selector: 'app-text-field-demo',
    templateUrl: './text-field-demo.component.html',
    styleUrl: './text-field-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldDemoComponent implements AfterViewInit {
    // Декораторы ViewChild для привязки к шаблонам вкладок
    @ViewChild('documentation-content') documentationContent!: TemplateRef<any>;
    @ViewChild('API-content') APIContent!: TemplateRef<any>;

    // Данные вкладок
    public componentTabs: TabMenuItemsInterface[] = [];

    ngAfterViewInit(): void {
        // Инициализация вкладок после загрузки контента
        this.componentTabs = [
            { 
                icon: 'home',
                label: 'Документация',
                content: this.documentationContent
            },
            {
                icon: 'home',
                label: 'API',
                content: this.APIContent
            }
        ];
    }
}