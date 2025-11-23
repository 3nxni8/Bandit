import React from 'react';
import Image from 'next/image';
import { MenuItem } from '../../data/menuData';

interface Props {
    item: MenuItem;
}

export const MenuItemCard: React.FC<Props> = ({ item }) => {
    const isNumericPrice = typeof item.price === 'number';

    return (
        <div className="group flex items-start gap-4 md:gap-6 w-full">

            {/* Image Section: Only renders if your data has images.
          Added a placeholder 'bg' in case image is missing to maintain layout structure */}
            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden rounded-sm bg-[var(--border)]/20">
                {item.image && (
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col pt-1 min-w-0">

                {/* Title + Dotted Line + Price */}
                <div className="flex items-end justify-between w-full mb-2">

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-[var(--color-white)] transition-colors truncate pr-2">
                        {item.name}
                    </h3>

                    {/* The Dotted Leader Line (Using your border variable) */}
                    <div className="flex-1 mx-2 border-b-2 border-dotted border-[var(--border)] mb-[6px] opacity-50" />

                    {/* Price */}
                    <div className="text-lg md:text-xl font-black text-[var(--color-white)] whitespace-nowrap leading-none">
                        {isNumericPrice ? (
                            <>
                                {/* You can remove 'RM' if you want just the number like the screenshot */}
                                <span className="text-sm font-normal mr-1 text-muted-foreground">MYR</span>
                                {(item.price as number).toFixed(0)}
                            </>
                        ) : (
                            item.price
                        )}
                    </div>
                </div>

                {/* Description */}
                {item.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {item.description}
                    </p>
                )}

                {/* Tag (Positioned inline or relative to maintain flow) */}
                {item.tag && (
                    <div className="mt-2">
             <span className="inline-block bg-[var(--color-gold)] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
              {item.tag}
            </span>
                    </div>
                )}
            </div>
        </div>
    );
};