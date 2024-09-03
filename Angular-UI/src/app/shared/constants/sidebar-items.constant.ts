import { SidebarItem } from "@shared/interfaces/sidebar/sidebar-item.interface";

export const SIDEBAR_ITEMS: SidebarItem[] = [
    {
        label: 'sidebar.overview',
        icon: 'widgets',
        route: 'overview',
        children: [],
    },
    {
        label: 'sidebar.gettingStarted',
        icon: 'home',
        route: '',
        children: [],
    },
    {
        label: 'sidebar.components',
        icon: 'explore',
        route: '',
        children: [
            {
                label: 'Textfield',
                icon: '',
                route: 'components/textfield',
                children: [],
            }
        ],
    },
    {
        label: 'sidebar.support',
        icon: 'info',
        route: '',
        children: [],
    }
];