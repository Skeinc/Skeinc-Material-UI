import { SidebarItem } from "@shared/interfaces/sidebar/sidebar-item.interface";

export const SIDEBAR_ITEMS: SidebarItem[] = [
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
                label: 'Textfield',
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