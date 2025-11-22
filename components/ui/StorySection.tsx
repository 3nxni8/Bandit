import React from 'react';
import { Info } from 'lucide-react';

export const StorySection: React.FC = () => (
    <section className="bg-stone-100 py-8 px-6 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-red-100 p-3 rounded-full text-red-500 flex-shrink-0">
                <Info size={24} />
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Our Story</h3>
                <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                    Boardroom Bandit was born out of a family spirit of gaming and dining.
                    Whether you&apos;re here for the food, the games, or the company, we&apos;ve created a space
                    that&apos;s comfortable, safe, and full of warmth (and maybe a few sore losers).
                </p>
            </div>
        </div>
    </section>
);