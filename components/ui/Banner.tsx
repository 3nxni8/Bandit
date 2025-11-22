import React from 'react';

interface BannerProps {
    title: string;
    subtitle: string;
    className?: string;
}

export const Banner: React.FC<BannerProps> = ({
                                                  title,
                                                  subtitle,
                                                  className = ""
                                              }) => {
    return (
        <section className={`relative w-full bg-white py-24 md:py-32 ${className}`}>

            {/* Decorative Circle Background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full border border-[var(--color-red)]/10 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">

                {/* Subtitle (Top Text) */}
                <p className="text-sm md:text-lg font-serif italic text-[var(--color-red)]/80 mb-2 md:mb-4">
                    {subtitle}
                </p>

                {/* Main Title (Bottom Text) */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--color-black)] uppercase tracking-tight leading-[1.1]">
                    {title}
                </h1>

            </div>
        </section>
    );
};