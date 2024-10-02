export function copyCodeBySelector(selector: string): void {
    const selectorBlock = document.querySelector(`${selector}`) as HTMLElement;
    const code = selectorBlock.textContent;
    const formattedCode = code?.replace(/<span class="value-tag">/g, '').replace(/<\/span>/g, '').replace(/<span class="value-variable">/g, '').replace(/<\/span>/g, '').trim();
    
    navigator.clipboard.writeText(formattedCode ?? '');
}