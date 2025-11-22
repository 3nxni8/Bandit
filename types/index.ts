export interface NavItem {
    label: string;
    href: string;
}

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
}

export interface MenuItem {
    name: string;
    description: string;
    price: number;
    tags?: string[];
}

export interface MenuCategory {
    id: number;
    title: string;
    icon: React.ReactNode;
    items: MenuItem[];
}

export {};
