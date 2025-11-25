import { Utensils, Wheat, Coffee, Beer, LucideProps } from 'lucide-react';
import { ComponentType } from 'react';

// --- Types ---
export type Price = string | number;

export interface MenuItem {
    name: string;
    description?: string;
    price: Price;
    tag?: string;
    image?: string;
}

export interface MenuCategory {
    id: string;
    title: string;
    icon: ComponentType<LucideProps>;
    items: MenuItem[];
}

// --- Data ---
export const menuData: MenuCategory[] = [
    // 1. Starters (Soups, Fries, Nachos)
    {
        id: 'starters',
        title: 'Starters',
        icon: Wheat,
        items: [
            { name: "Shroomed Soup", description: "Rich, velvety mushroom soup. Best enjoyed with warm bread.", price: 14, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop" },
            { name: "Tomato Soup", description: "Slow-roasted tomatoes blended into a smooth, tangy soup.", price: 14, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop" },
            { name: "Golden Sweet Fries", description: "Perfectly crisp on the outside, soft within.", price: 12, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop" },
            { name: "Loaded Nacho Stack", description: "Crisp tortilla chips piled high with cheese, salsa, and a dash of mischief.", price: 10, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=400&fit=crop" },
            { name: "East Coast Crunch", description: "Golden, crispy Keropok Lekor, perfect for sharing.", price: 11, image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop" },
        ]
    },

    // 2. Brunch (Big Breakfast & Savoury Sourdoughs)
    {
        id: 'brunch',
        title: 'Brunch',
        icon: Coffee,
        items: [
            { name: "Bandit's Big Breakfast (BBB)", description: "Fluffy omelette, tater tots, sausages, beef bacon, beans, salad, and sourdough.", price: 22, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop" },
            { name: "Blue Cheese & Cranberry Sourdough", price: 16, image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop" },
            { name: "Tomato & Black Olive Sourdough", price: 13, image: "https://images.unsplash.com/photo-1584969646874-00bc8d3a29f2?w=400&h=400&fit=crop" },
            { name: "Parmesan Cheese Bagel", price: 9, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29e84?w=400&h=400&fit=crop" },
        ]
    },

    // 3. Mains (Rice Bowls)
    {
        id: 'mains',
        title: 'Mains',
        icon: Utensils,
        items: [
            { name: "Buttermilk Chicken Bowl", description: "Creamy, crispy, and dangerously comforting buttermilk chicken over warm Japanese rice.", price: 16.5, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
            { name: "Salted Egg Chicken Bowl", description: "Crispy chicken coated in silky salted egg yolk sauce over warm Japanese rice.", price: 16.5, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop" },
            { name: "Mad Spicy Sambal Bowl", description: "Crispy golden chicken glazed with spicy sambal served with warm Japanese rice.", price: 16.5, tag: "Spicy", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop" },
        ]
    },

    // 4. Pasta (Split from Mains)
    {
        id: 'pasta',
        title: 'Pasta',
        icon: Utensils,
        items: [
            { name: "Chicken Pesto", description: "Tender grilled chicken tossed with al dente pasta, fresh basil pesto, and a hint of parmesan.", price: 18, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop" },
            { name: "Chicken Bolognese", description: "Minced chicken in rich tomato sauce, served over perfectly cooked pasta.", price: 18, image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&h=400&fit=crop" },
            { name: "Beef Carbonara", description: "Tender beef slices tossed with al dente spaghetti in a rich, velvety sauce.", price: 18, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=400&fit=crop" },
        ]
    },

    // 5. Sandwiches (The Focaccias & Melts)
    {
        id: 'sandwiches',
        title: 'Sandwiches',
        icon: Wheat,
        items: [
            { name: "Tuna Melt", description: "Creamy tuna salad layered with crisp greens and melted cheese on Focaccia.", price: 14.5, image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=400&fit=crop" },
            { name: "Chicken Pop Crisp", description: "Crispy chicken bites with lettuce and house sauce on Focaccia.", price: 14.5, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=400&fit=crop" },
            { name: "Crabstick Delight", description: "Crabstick and fresh veggies in light dressing on Focaccia.", price: 14.5, image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=400&fit=crop" },
        ]
    },

    // 6. Sharing (Wings)
    {
        id: 'sharing',
        title: 'Sharing',
        icon: Utensils,
        items: [
            { name: "Spicy Garlic Fried Wings", description: "6 pieces of golden fried chicken tossed in our signature spicy garlic glaze.", price: 15, tag: "Spicy", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=400&fit=crop" },
            { name: "Honey Butter Fried Wings", description: "6 pieces of crispy chicken glazed with a buttery honey coating.", price: 15, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=400&fit=crop" },
        ]
    },

    // 7. Pastries & Desserts (Croissants & Waffles)
    {
        id: 'desserts',
        title: 'Desserts',
        icon: Coffee,
        items: [
            { name: "Classic Press Waffle", description: "Golden, buttery perfection. Served with maple and cream.", price: 15, image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=400&h=400&fit=crop" },
            { name: "Scoop Stack Waffle", description: "Waffle served warm with a scoop of creamy gelato.", price: 18, image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=400&fit=crop" },
            { name: "French Croissant", price: 9, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop" },
            { name: "Almond Croissant", price: 10, image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=400&h=400&fit=crop" },
            { name: "Croffle", price: 8, image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=400&fit=crop" },
            { name: "Chocolate Praline Suisse", price: 9, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop" },
            { name: "Cinnamon Roll", price: 9, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=400&fit=crop" },
        ]
    },

    // 8. Beverages
    {
        id: 'drinks',
        title: 'Beverages',
        icon: Beer,
        items: [
            { name: "Black Coffee", price: "Hot 11 | Cold 13", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop" },
            { name: "White Coffee", description: "Espresso and milk. Silky, comforting, and classic.", price: "Hot 12 | Cold 14", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop" },
            { name: "Mocha", description: "Coffee meets chocolate.", price: "Hot 12 | Cold 14", image: "https://images.unsplash.com/photo-1578374173705-c02fafc8589d?w=400&h=400&fit=crop" },
            { name: "Mood Latte", description: "Vanilla, hazelnut, or caramel.", price: "Hot 13 | Cold 15", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop" },
            { name: "Matcha Latte", description: "Premium Japanese matcha with milk.", price: "Hot 13 | Cold 15", image: "https://images.unsplash.com/photo-1536013564743-2e3e8e60f3e3?w=400&h=400&fit=crop" },
            { name: "Strawberry Matcha Latte", description: "Fresh strawberry sweetness and matcha's earthy depth.", price: "Cold 16.5", image: "https://images.unsplash.com/photo-1578374173705-c02fafc8589d?w=400&h=400&fit=crop" },
            { name: "Ocean Blue Fizz", description: "Citrus with a splash of berry sweetness.", price: 14, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=400&fit=crop" },
            { name: "Pink Blossom", description: "Yoghurt, guava, and fizz.", price: 14, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop" },
            { name: "Pandan Breeze", description: "Pandan and bright yuzu.", price: 14, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=400&fit=crop" },
            { name: "Tea Selection", description: "English Breakfast or Earl Grey.", price: 11, image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop" },
            { name: "Lemon Rush Tea", description: "Black tea and lemon shaken over ice.", price: 12, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop" },
            { name: "Peach Press Tea", description: "Fragrant peach notes meet smooth tea.", price: 12, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop" },
        ]
    }
];



export const BANNER_DATA = {
    locations: {
        subtitle: " BOARDROOM BANDIT",
        title: "Locations"
    },
    about: {
        subtitle: "Insights",
        title: "About Restaurant"
    },
    menu: {
        subtitle: "Menus",
        title: "Of Our Dishes"
    },
    reservation: {
        subtitle: "Reservation",
        title: "You WELCOME"
    }
};