import React from 'react';
import { MenuCategory } from '../../data/menuData';
import { MenuItemCard } from './MenuItemCard';

interface Props {
    category: MenuCategory;
}

export const MenuSection: React.FC<Props> = ({ category }) => {
    return (
        <section id={category.id} className="scroll-mt-32 py-8">

            {/* Header: Kept your original style */}
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-[var(--color-black)] uppercase tracking-wide whitespace-nowrap">
                    {category.title}
                </h2>
                <div className="h-1 flex-grow bg-[var(--border)] rounded-full opacity-30" />
            </div>

            {/* Grid: Adjusted gap for the list layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item, index) => (
                    <MenuItemCard key={index} item={item} />
                ))}
            </div>
        </section>
    );
};