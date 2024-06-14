import { Component } from "@angular/core";
import { CitiesDefaultMocks, CitiesObjectMocks } from "../../shared/mocks/cities.mocks";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss',
})
export class OverviewComponent{
    // Значения городов
    citiesDefault = CitiesDefaultMocks
    citiesObject = CitiesObjectMocks;
    selectedCity: any;
}