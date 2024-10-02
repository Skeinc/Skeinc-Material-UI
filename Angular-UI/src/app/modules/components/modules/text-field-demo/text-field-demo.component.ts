import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from "@angular/core";
import { TabMenuItemsInterface } from "@shared/interfaces/menu/tab-menu/tab-menu-items.interface";

@Component({
    selector: 'app-text-field-demo',
    templateUrl: './text-field-demo.component.html',
    styleUrl: './text-field-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldDemoComponent implements AfterViewInit {
    constructor (
        private cdr: ChangeDetectorRef,
    ) {}

    // Декораторы ViewChild для привязки к шаблонам вкладок
    @ViewChild('documentationContent') documentationContent!: TemplateRef<any>;
    @ViewChild('APIContent') APIContent!: TemplateRef<any>;

    // Данные вкладок
    public componentTabs: TabMenuItemsInterface[] = [];

    // Переменная для хранения значения компонента
    public componentValue: string = '';

    ngAfterViewInit(): void {
        // Инициализация вкладок после загрузки контента
        this.componentTabs = [
            { 
                label: 'components.documentation',
                content: this.documentationContent
            },
            {
                label: 'components.api',
                content: this.APIContent
            }
        ];

        this.cdr.detectChanges();
    }
}