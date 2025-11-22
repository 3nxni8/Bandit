import React from 'react';
import { menuData } from '@/data/menuData';
import { MenuSection } from '@/components/menu/menu-section';

const MenuPage = () => {
  return (
    <main className="py-12 md:py-16">
      <header className="mb-12 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[color:#6b7280] mb-3">
          Our Menu
        </p>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--color-black)]">
          Crafted Plates &amp; Bold Brews
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[color:#6b7280]">
          From big breakfast stacks to crafted brews, everything on this menu is built for conversations that run a little too
          late.
        </p>
      </header>

      <div className="space-y-16">
        {menuData.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
};

export default MenuPage;