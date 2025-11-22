import { Utensils, Wheat, Coffee, Beer, LucideProps } from 'lucide-react';
import { ComponentType } from 'react';

// --- Types ---
export type Price = string | number;

export interface MenuItem {
    name: string;
    description?: string;
    price: Price;
    tag?: string;
}

export interface MenuCategory {
    id: string;
    title: string;
    icon: ComponentType<LucideProps>;
    items: MenuItem[];
}

// --- Data ---
export const menuData: MenuCategory[] = [
    {
        id: 'mains',
        title: 'Mains & Pastas',
        icon: Utensils,
        items: [
            { name: "Chicken Pesto", description: "Tender grilled chicken tossed with al dente pasta, fresh basil pesto, and a hint of parmesan.", price: 18 },
            { name: "Chicken Bolognese", description: "Minced chicken in rich tomato sauce, served over perfectly cooked pasta.", price: 18 },
            { name: "Beef Carbonara", description: "Tender beef slices tossed with al dente spaghetti in a rich, velvety sauce.", price: 18 },
            { name: "Buttermilk Chicken Bowl", description: "Creamy, crispy, and dangerously comforting buttermilk chicken over warm Japanese rice.", price: 16.5 },
            { name: "Salted Egg Chicken Bowl", description: "Crispy chicken coated in silky salted egg yolk sauce over warm Japanese rice.", price: 16.5 },
            { name: "Mad Spicy Sambal Bowl", description: "Crispy golden chicken glazed with spicy sambal served with warm Japanese rice.", price: 16.5, tag: "Spicy" },
            { name: "Bandit's Big Breakfast (BBB)", description: "Fluffy omelette, tater tots, sausages, beef bacon, beans, salad, and sourdough.", price: 22 },
        ]
    },
    {
        id: 'bites',
        title: 'Lite Bites & Wings',
        icon: Wheat,
        items: [
            { name: "Spicy Garlic Fried Wings", description: "6 pieces of golden fried chicken tossed in our signature spicy garlic glaze.", price: 15, tag: "Spicy" },
            { name: "Honey Butter Fried Wings", description: "6 pieces of crispy chicken glazed with a buttery honey coating.", price: 15 },
            { name: "East Coast Crunch", description: "Golden, crispy Keropok Lekor, perfect for sharing.", price: 11 },
            { name: "Loaded Nacho Stack", description: "Crisp tortilla chips piled high with cheese, salsa, and a dash of mischief.", price: 10 },
            { name: "Golden Sweet Fries", description: "Perfectly crisp on the outside, soft within.", price: 12 },
            { name: "Tuna Melt", description: "Creamy tuna salad layered with crisp greens and melted cheese on Focaccia.", price: 14.5 },
            { name: "Crabstick Delight", description: "Crabstick and fresh veggies in light dressing on Focaccia.", price: 14.5 },
            { name: "Chicken Pop Crisp", description: "Crispy chicken bites with lettuce and house sauce on Focaccia.", price: 14.5 },
            { name: "Shroomed Soup", description: "Rich, velvety mushroom soup. Best enjoyed with warm bread.", price: 14 },
            { name: "Tomato Soup", description: "Slow-roasted tomatoes blended into a smooth, tangy soup.", price: 14 },
        ]
    },
    {
        id: 'pastries',
        title: 'Pastries & Waffles',
        icon: Coffee,
        items: [
            { name: "French Croissant", price: 9 },
            { name: "Almond Croissant", price: 10 },
            { name: "Croffle", price: 8 },
            { name: "Chocolate Praline Suisse", price: 9 },
            { name: "Cinnamon Roll", price: 9 },
            { name: "Parmesan Cheese Bagel", price: 9 },
            { name: "Blue Cheese & Cranberry Sourdough", price: 16 },
            { name: "Tomato & Black Olive Sourdough", price: 13 },
            { name: "Classic Press Waffle", description: "Golden, buttery perfection. Served with maple and cream.", price: 15 },
            { name: "Scoop Stack Waffle", description: "Waffle served warm with a scoop of creamy gelato.", price: 18 },
        ]
    },
    {
        id: 'drinks',
        title: 'Coffee & Drinks',
        icon: Beer,
        items: [
            { name: "Black Coffee", price: "Hot 11 | Cold 13" },
            { name: "White Coffee", description: "Espresso and milk. Silky, comforting, and classic.", price: "Hot 12 | Cold 14" },
            { name: "Mocha", description: "Coffee meets chocolate.", price: "Hot 12 | Cold 14" },
            { name: "Mood Latte", description: "Vanilla, hazelnut, or caramel.", price: "Hot 13 | Cold 15" },
            { name: "Matcha Latte", description: "Premium Japanese matcha with milk.", price: "Hot 13 | Cold 15" },
            { name: "Strawberry Matcha Latte", description: "Fresh strawberry sweetness and matcha's earthy depth.", price: "Cold 16.5" },
            { name: "Ocean Blue Fizz", description: "Citrus with a splash of berry sweetness.", price: 14 },
            { name: "Pink Blossom", description: "Yoghurt, guava, and fizz.", price: 14 },
            { name: "Pandan Breeze", description: "Pandan and bright yuzu.", price: 14 },
            { name: "Tea Selection", description: "English Breakfast or Earl Grey.", price: 11 },
            { name: "Lemon Rush Tea", description: "Black tea and lemon shaken over ice.", price: 12 },
            { name: "Peach Press Tea", description: "Fragrant peach notes meet smooth tea.", price: 12 },
        ]
    }
];