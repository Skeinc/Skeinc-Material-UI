import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    // Подписка для хранения состояния видимости навигации
    private sidebarVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    // Наблюдатель, который экспонирует состояние видимости навигации
    public sidebarVisible$: Observable<boolean> = this.sidebarVisibleSubject.asObservable();

    // Метод для смены видимости навигации
    public toggleSidebarVisible(): void {
        this.sidebarVisibleSubject.next(!this.sidebarVisibleSubject.getValue());
    }

    // Метод для получения видимости навигации
    public getSidebarVisible(): boolean {
        return this.sidebarVisibleSubject.getValue();
    }
}