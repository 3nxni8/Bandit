import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
    return (
        <section className="w-full bg-[var(--color-white)] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-red mb-4">
                        <Instagram className="w-12 h-12 md:w-16 md:h-16 bg-[var(--black)" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-[var(--red) tracking-wide">
                        Follow Us on Instagram
                    </h2>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {[1, 2, 3, 4].map((item) => (
                        <a
                            key={item}
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full h-64 md:h-72 lg:h-80 group overflow-hidden rounded-lg"
                        >
                            <Image
                                src="/images/hero.png"
                                alt={`Instagram post ${item}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm"
                            />
                            {/* Instagram Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Instagram className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};