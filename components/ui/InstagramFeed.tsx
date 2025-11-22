import React from 'react';
import Image from 'next/image';

export const InstagramFeed: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row w-full bg-[#0f2222]">

            {/* Left: Branding */}
            <div className="w-full md:w-1/3 min-h-[300px] flex items-center justify-center p-8 bg-[#0d1f1f]">
                <div className="relative w-48 h-48 rounded-full border border-[#A3886D] flex items-center justify-center">
                    <h2 className="text-3xl font-serif text-white tracking-wide">Instagram</h2>
                </div>
            </div>

            {/* Right: Image Grid */}
            <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4">
                <div className="relative w-full h-64">
                    <Image
                        src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?w=600&fit=crop"
                        fill
                        className="object-cover hover:opacity-90 transition-opacity cursor-pointer"
                        alt="Food 1"
                    />
                </div>
                <div className="relative w-full h-64">
                    <Image
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&fit=crop"
                        fill
                        className="object-cover hover:opacity-90 transition-opacity cursor-pointer"
                        alt="Cocktail"
                    />
                </div>
                <div className="relative w-full h-64">
                    <Image
                        src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600&fit=crop"
                        fill
                        className="object-cover hover:opacity-90 transition-opacity cursor-pointer"
                        alt="Chef plating"
                    />
                </div>
                <div className="relative w-full h-64">
                    <Image
                        src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&fit=crop"
                        fill
                        className="object-cover hover:opacity-90 transition-opacity cursor-pointer"
                        alt="Waiter"
                    />
                </div>
            </div>
        </section>
    );
};