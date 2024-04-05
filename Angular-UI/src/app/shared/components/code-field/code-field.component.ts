import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-code-field',
    templateUrl: './code-field.component.html',
    styleUrl: './code-field.component.scss',
})
export class CodeFieldComponent {
    constructor(
        private elementRef: ElementRef,
    ) { }

    // DOM-элементы
    @ViewChild('codefieldFirst') codefieldFirst!: ElementRef;
    @ViewChild('codefieldSecond') codefieldSecond!: ElementRef;
    @ViewChild('codefieldThird') codefieldThird!: ElementRef;
    @ViewChild('codefieldFourth') codefieldFourth!: ElementRef;

    // Первое значение элемента
    codeFirstValue: number | null = null;

    // Второе значение элемента
    codeSecondValue: number | null = null;

    // Третье значение элемента
    codeThirdValue: number | null = null;

    // Четвертое значение элемента
    codeFourthValue: number | null = null;

    // Метод, который проверяет значение на максимальную длину
    checkMaxLenght(event: any): void {
        if (event.target.value.length > 0) {
            event.target.value = event.target.value.toString().slice(0, 0);
        }
    }

    // Метод вызывается при вводе символов в поле
    onInput(event: any, currentInput: HTMLInputElement): void {
        const value = event.target.value;

        if (value.length === 0) {
            this.onFocusHandler(currentInput, false);
        }
        else {
            this.onFocusHandler(currentInput, true);
        }
    }

    // Метод обработки фокус элемента
    onFocusHandler(currentInput: HTMLInputElement, nextElementFocus: boolean): void {
        const fields = [
            this.codefieldFirst.nativeElement,
            this.codefieldSecond.nativeElement,
            this.codefieldThird.nativeElement,
            this.codefieldFourth.nativeElement,
        ];

        const currentIndex = fields.indexOf(currentInput);

        if(nextElementFocus) {
            if (currentIndex < fields.length - 1) {
                fields[currentIndex + 1].focus();
            }
        }
        else {
            if(currentIndex > 0) {
                fields[currentIndex - 1].focus();
            }
        }
    }
}