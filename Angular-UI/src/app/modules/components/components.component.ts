import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrl: './components.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent implements OnDestroy {
    // Subject для отслеживания уничтожения компонента
    private onDestroy$: Subject<void> = new Subject<void>();

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}