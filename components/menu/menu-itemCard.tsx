import React from 'react';
import type { MenuItem } from '../../data/menuData';

interface Props {
  item: MenuItem;
}

export const MenuItemCard: React.FC<Props> = ({ item }) => {
  const isNumericPrice = typeof item.price === 'number';

  return (
    <div className="group relative bg-[var(--color-white)] p-6 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-[var(--color-black)] group-hover:text-[var(--color-red)] transition-colors pr-4">
          {item.name}
        </h3>
        <div className="text-lg font-black text-[var(--color-red)] whitespace-nowrap">
          {isNumericPrice ? item.price.toFixed(0) : item.price}
          {isNumericPrice && (
            <span className="text-xs font-normal ml-0.5 text-[color:#9ca3af]">MYR</span>
          )}
        </div>
      </div>

      {item.description && (
        <p className="text-[color:#6b7280] text-sm leading-relaxed">{item.description}</p>
      )}

      {item.tag && (
        <span className="absolute -top-3 -right-2 bg-[var(--color-red)] text-[var(--color-white)] text-xs font-black px-2 py-1 rounded shadow-sm transform rotate-3 border border-[var(--color-red)]">
          {item.tag}
        </span>
      )}
    </div>
  );
};