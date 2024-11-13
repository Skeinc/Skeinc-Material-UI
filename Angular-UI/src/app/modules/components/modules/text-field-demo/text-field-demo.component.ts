import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from "@angular/core";
import { TabMenuItemsInterface } from "@shared/interfaces/menu/tab-menu/tab-menu-items.interface";
import { copyCodeBySelector } from "@shared/utilities/copy-code.util";

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
    @ViewChild('sourceCodeContent') sourceCodeContent!: TemplateRef<any>;

    // Данные вкладок
    public componentTabs: TabMenuItemsInterface[] = [];

    // Переменная для хранения значения компонента
    public componentValue: string = '';

    // Переменная для хранения логина
    public login: string = '';

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

    // Метод для вызова функции копирования кода
    public callCopyCodeFunction(selector: string): void {
        copyCodeBySelector(selector);
    }

    // Метод для генерации случайного логина
    public generateLogin(): void {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let login = '';
    
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            login += chars[randomIndex];
        }
    
        // Добавим цифру в конце логина для большей вариативности
        const randomDigit = Math.floor(Math.random() * 10);
        login += randomDigit;
    
        this.login = login;

        this.cdr.markForCheck();
    }
}