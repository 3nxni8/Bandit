'use client'; // Required for useState

import React, { useState } from 'react';
import { menuData } from '@/data/menuData';
import { MenuSection } from '@/components/menu/MenuSection';
import { Marquee } from '@/components/ui/Marquee';
import AboutSection from "@/components/ui/About";
import { InfoSection } from "@/components/ui/infoSection";



const MenuPage = () => {
    // Default to the first category in your data
    const [activeTabId, setActiveTabId] = useState(menuData[0]?.id);

    // Find the data for the currently selected tab
    const activeCategory = menuData.find((cat) => cat.id === activeTabId) || menuData[0];

    return (
        <main className="min-h-screen w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <header className="mb-12 text-center">
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
                        Our Menu
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-black)]">
                        Crafted Plates &amp; Bold Brews
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-muted-foreground px-4">
                        From big breakfast stacks to crafted brews, everything on this menu is built for conversations that run a little too late.
                    </p>

                    <div className=" w- full mt-8">
                        <Marquee />
                        <Marquee />
                    </div>
                </header>

                {/* --- NEW: TAB NAVIGATION --- */}
                <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-12 select-none mt-10">
                    {menuData.map((category, index) => {
                        const isActive = activeTabId === category.id;
                        return (
                            <React.Fragment key={category.id}>
                                <button
                                    onClick={() => setActiveTabId(category.id)}
                                    className={`
                    text-xl md:text-2xl font-black uppercase tracking-wide transition-all duration-300
                    ${isActive
                                        ? 'text-[var(--color-balck)] scale-105' // Active State
                                        : 'text-[var(--border)] hover:text-[var(--color-gold)]/60' // Inactive State
                                    }
                  `}
                                >
                                    {category.title}
                                </button>

                                {/* Diamond Separator (Show unless it's the last item) */}
                                {index < menuData.length - 1 && (
                                    <span className="text-[var(--color-red)] text-lg md:text-2xl opacity-40">
                    ⋄
                  </span>
                                )}
                            </React.Fragment>
                        );
                    })}
                </nav>

                {/* Content Area */}
                <div className="min-h-[600px] animate-in fade-in zoom-in-95 duration-300">
                    {/* We only render the ONE active section here */}
                    <MenuSection key={activeCategory.id} category={activeCategory} />
                </div>

            </div>

            <div className="mt-16">

            </div>

            <AboutSection />
            <InfoSection />
        </main>
    );
};

export default MenuPage;