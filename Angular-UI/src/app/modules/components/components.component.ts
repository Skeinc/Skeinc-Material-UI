import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrl: './components.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent {}