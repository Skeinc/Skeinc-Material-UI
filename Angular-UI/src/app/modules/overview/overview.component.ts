import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {}