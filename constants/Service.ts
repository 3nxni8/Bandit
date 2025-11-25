import { Utensils, Martini, IceCream, ChefHat } from "lucide-react";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
    {
        id: 1,
        title: "Board Game Café",
        description: "Enjoy a vast selection of board games while savoring our gourmet food and drinks.",
        icon: Utensils,
    },
    {
        id: 2,
        title: "Handcrafted Mocktails.",
        description: "Savor our expertly crafted mocktails, blending fresh ingredients for a delightful experience.",
        icon: Martini,
    },
    {
        id: 3,
        title: "Creative Desserts.",
        description: "Indulge in our imaginative dessert creations that turn sweet dreams into reality.",
        icon: IceCream,
    },
    {
        id: 4,
        title: "Cozy, Fun & Competitive",
        description: " Experience a warm and inviting atmosphere perfect for friendly competition and memorable moments.",
        icon: ChefHat,
    },
];
