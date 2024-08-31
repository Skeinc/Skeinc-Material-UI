import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-text-field-demo',
    templateUrl: './text-field-demo.component.html',
    styleUrl: './text-field-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldDemoComponent {}