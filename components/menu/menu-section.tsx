import React from 'react';
import { MenuCategory } from '../../data/menuData';
import { MenuItemCard } from './menu-itemCard';

interface Props {
  category: MenuCategory;
}

export const MenuSection: React.FC<Props> = ({ category }) => {
  return (
    <section id={category.id} className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-[var(--color-black)] uppercase tracking-wide">
          {category.title}
        </h2>
        <div className="h-1 flex-grow bg-[var(--border)] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {category.items.map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};