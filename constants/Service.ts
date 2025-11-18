import { Utensils, Martini, IceCream, ChefHat } from "lucide-react";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
    {
        id: 1,
        title: "Fine Dining",
        description: "Where culinary artistry meets passion, creating flavors that define sophistication.",
        icon: Utensils,
    },
    {
        id: 2,
        title: "Great Bar",
        description: "Experience mixology that shapes the world, one perfectly crafted cocktail at a time.",
        icon: Martini,
    },
    {
        id: 3,
        title: "Ice Cream Bar",
        description: "A nostalgic yet modern journey through global flavors and artisanal sweet treats.",
        icon: IceCream,
    },
    {
        id: 4,
        title: "Quality Service",
        description: "Impeccable attention to detail where world-class hospitality meets comfort.",
        icon: ChefHat,
    },
];
