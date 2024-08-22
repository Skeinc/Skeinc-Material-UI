import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrl: './application.component.scss',
})
export class ApplicationComponent implements OnInit{
    constructor (
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.redirectToOverview();
    }

    // Переадресация на обзор компонентов
    private redirectToOverview(): void {
        this.router.navigateByUrl('overview');
    }
}