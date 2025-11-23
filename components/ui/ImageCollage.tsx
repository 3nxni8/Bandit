import Image from "next/image";
import React from "react";

const ImageCollage: React.FC = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center group">
            {/* Top image (sits behind) - centered horizontally and pushed up */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 md:top-10 w-[68%] md:w-[60%] lg:w-[52%] h-[46%] md:h-[50%] overflow-hidden rounded-2xl shadow-lg z-10">
                <Image
                    src="/images/badnt-im1.png"
                    alt="Restaurant interior ambiance"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    style={{ willChange: 'transform' }}
                    priority
                />
            </div>

            {/* Bottom image (sits on top and slightly lower to create vertical overlap) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[42%] md:top-[48%] w-[74%] md:w-[64%] lg:w-[56%] h-[52%] md:h-[58%] overflow-hidden rounded-3xl shadow-2xl z-20">
                <Image
                    src="/images/bandt-im2.png"
                    alt="Signature cocktail detail"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    style={{ willChange: 'transform' }}
                    priority
                />
            </div>

            {/* Decorative Element between the two images */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[40%] md:top-[46%] z-30 w-14 h-14 bg-[var(--color-white)] rounded-full border border-[var(--color-gold)]/30 shadow-lg hidden md:flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--color-black)] rounded-full animate-pulse" />
            </div>
        </div>
    );
};

export default ImageCollage;
