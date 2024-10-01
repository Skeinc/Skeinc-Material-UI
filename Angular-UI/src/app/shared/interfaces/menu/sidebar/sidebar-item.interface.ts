export interface SidebarItem {
    caption?: string;
    label: string;
    icon: string;
    route: string;
    children: SidebarItem[];
    isVisible: boolean;
}