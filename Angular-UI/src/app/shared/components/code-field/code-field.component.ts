import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";

@Component({
    selector: 'app-code-field',
    templateUrl: './code-field.component.html',
    styleUrl: './code-field.component.scss',
})
export class CodeFieldComponent {
    constructor(
        private elementRef: ElementRef,
    ) { }

	// Output для изменения значения элемента
    @Output() elementValueChange = new EventEmitter<string>();

    // Значение кода
    @Input() elementValue?: string | null;

    // DOM-элементы
    @ViewChild('codefieldFirst') codefieldFirst!: ElementRef;
    @ViewChild('codefieldSecond') codefieldSecond!: ElementRef;
    @ViewChild('codefieldThird') codefieldThird!: ElementRef;
    @ViewChild('codefieldFourth') codefieldFourth!: ElementRef;

    // Первое значение элемента
    public codeFirstValue: string = '';

    // Второе значение элемента
    public codeSecondValue: string = '';

    // Третье значение элемента
    public codeThirdValue: string = '';

    // Четвертое значение элемента
    public codeFourthValue: string = '';

    // Метод, который проверяет значение на максимальную длину
	public checkMaxLenght(event: any): void {
		if (event.target.value.length > 0) {
			event.target.value = event.target.value.toString().slice(0, 0);
		};
	};

    // Метод вызывается при вводе символов в поле
	public onInput(event: any, currentInput: HTMLInputElement): void {
		this.updateCodeValue();

		if (this.codeFirstValue && this.codeSecondValue && this.codeThirdValue && this.codeFourthValue) {
			
		};

		const value = event.target.value;

		if (value.length === 1) {
			this.onFocusHandler(currentInput, true);
		};
	};

    // Обработка кнопки "Backspace"
	public backspaceHandler(event: KeyboardEvent, currentInput: HTMLInputElement): void {
		if (event.key === 'Backspace') {
			if (currentInput.value.length > 0) {
				currentInput.value = '';
			} else {
				// Предотвращаем действие по умолчанию, если input пустой
				event.preventDefault();
				// Переключаем фокус
				this.onFocusHandler(currentInput, false);
			}
		}
	};

    // Метод обработки фокус элемента
	public onFocusHandler(currentInput: HTMLInputElement, nextElementFocus: boolean): void {
		const fields = [
			this.codefieldFirst.nativeElement,
			this.codefieldSecond.nativeElement,
			this.codefieldThird.nativeElement,
			this.codefieldFourth.nativeElement,
		];

		const currentIndex = fields.indexOf(currentInput);

		if (nextElementFocus) {
			if (currentIndex < fields.length - 1) {
				fields[currentIndex + 1].focus();
			}
		}
		else {
			if (currentIndex > 0) {
				switch (currentIndex) {
					case 0:
						this.codeFirstValue = '';
						break;
					case 1:
						this.codeSecondValue = '';
						break;
					case 2:
						this.codeThirdValue = '';
						break;
					case 3:
						this.codeFourthValue = '';
						break;
					default:
						break;
				}

				const previousInput = fields[currentIndex - 1] as HTMLInputElement;
				previousInput.focus();
			}
		};
	};

    // Метод для обновления значения кода
	private updateCodeValue(): void {
		if (this.codeFirstValue && this.codeSecondValue && this.codeThirdValue && this.codeFourthValue) {
			this.elementValue = this.codeFirstValue?.toString() + this.codeSecondValue?.toString() + this.codeThirdValue?.toString() + this.codeFourthValue?.toString();
			
			this.elementValueChange.emit(this.elementValue);
		};
	};
}