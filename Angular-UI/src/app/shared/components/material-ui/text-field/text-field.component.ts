import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { generateRandomID } from "@shared/utilities/generate-random-id.util";
import { generateRandomName } from "@shared/utilities/generate-random-name.util";

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrl: './text-field.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent implements OnInit {
    // Входной параметр: ID элемента
    @Input() elementID?: string;

    // Входной параметр: Name элемента
    @Input() elementName?: string;

    // Входной параметр: Placeholder элемента
    @Input() elementPlaceholder?: string;

    // Входной параметр: Label элемента
    @Input() elementLabel?: string;

    // Входной параметр: Value элемента
    @Input() elementValue?: string;

    // Входной параметр: Maxlenght элемента
    @Input() elementMaxlenght?: number;

    // Входной параметр: Required
    @Input() elementRequired?: boolean = false;

    // Входной параметр: Readonly
    @Input() elementReadonly?: boolean = false;

    // Входной параметр: Disable
    @Input() elementDisable?: boolean = false;

    ngOnInit(): void {
        if(this.elementID === null && this.elementName === null) {
            this.elementID = generateRandomID('text-field');
            this.elementName = generateRandomName('text-field');
        }
    }
}