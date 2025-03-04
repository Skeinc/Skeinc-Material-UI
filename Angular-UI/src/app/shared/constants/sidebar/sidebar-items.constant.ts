import { SidebarItemInterface } from "@shared/interfaces/menu/sidebar/sidebar-item.interface";

export const SIDEBAR_ITEMS: SidebarItemInterface[] = [
    {
        label: 'sidebar.overview',
        icon: 'widgets',
        route: 'overview',
        children: [],
        isVisible: true,
    },
    {
        label: 'sidebar.gettingStarted',
        icon: 'home',
        route: '',
        children: [],
        isVisible: true,
    },
    {
        label: 'sidebar.components',
        icon: 'explore',
        route: '',
        children: [
            {
                caption: 'sidebar.componentsItems.formatting.title',
                label: 'sidebar.componentsItems.formatting.children.textfield',
                icon: '',
                route: 'components/textfield',
                children: [],
                isVisible: true,
            }
        ],
        isVisible: true,
    },
    {
        label: 'sidebar.support',
        icon: 'info',
        route: '',
        children: [],
        isVisible: true,
    }
];