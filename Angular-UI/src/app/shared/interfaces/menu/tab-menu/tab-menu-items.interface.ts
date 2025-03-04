import { TemplateRef } from "@angular/core";

export interface TabMenuItemInterface {
    icon?: string;
    label: string;
    content: TemplateRef<any>;
}