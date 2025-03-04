export interface SidebarItemInterface {
    caption?: string;
    label: string;
    icon: string;
    route: string;
    children: SidebarItemInterface[];
    isVisible: boolean;
}