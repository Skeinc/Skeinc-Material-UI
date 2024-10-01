import { TemplateRef } from "@angular/core";

export interface TabMenuItemsInterface {
    icon?: string;
    label: string;
    content: TemplateRef<any>;
}