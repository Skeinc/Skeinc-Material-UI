import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, TemplateRef, ViewChild } from "@angular/core";
import { TabMenuItemInterface } from "@shared/interfaces/menu/tab-menu/tab-menu-items.interface";
import { copyCodeBySelector } from "@shared/utilities/others/copy-code.util";
import { Subject } from "rxjs";

@Component({
    selector: 'app-text-field-demo',
    templateUrl: './text-field-demo.component.html',
    styleUrl: './text-field-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TextFieldDemoComponent implements AfterViewInit, OnDestroy {
    constructor (
        private readonly cdr: ChangeDetectorRef,
    ) {}

    // Декораторы ViewChild для привязки к шаблонам вкладок
    @ViewChild('documentationContent') documentationContent!: TemplateRef<any>;
    @ViewChild('APIContent') APIContent!: TemplateRef<any>;
    @ViewChild('sourceCodeContent') sourceCodeContent!: TemplateRef<any>;

    // Subject для отслеживания уничтожения компонента
    private onDestroy$: Subject<void> = new Subject<void>();
    // Данные вкладок
    public componentTabs: TabMenuItemInterface[] = [];
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

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // Метод для вызова функции копирования кода
    public callCopyCodeFunction(selector: string): void {
        copyCodeBySelector(selector);
    }
}