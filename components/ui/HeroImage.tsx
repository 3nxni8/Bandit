import Image from "next/image";

const HeroImage = () => {
    return (
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden group">
            {/* Background image - positioned to keep subject visible on large screens */}
            <div className="w-full h-full relative">
                <Image
                    src="/images/hero.png"
                    alt="Artisan Croissant"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center lg:object-right transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ willChange: 'transform' }}
                    priority
                />
            </div>

            {/* Subtle left gradient to give the content area breathing room */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent to-black/10 lg:to-black/20"
            />

            {/* Floating Review Badge - kept subtle and only visible on md+ */}
            <div className="absolute bottom-12 left-12 hidden md:block">
                <div className="bg-white/90 backdrop-blur-sm p-5 border-l-2 border-black/5 shadow-xl max-w-xs">
                    <p className="font-serif italic text-lg text-black leading-snug">
                        &ldquo;A symphony of textures that redefines pastry.&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-black/10">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-serif text-xs">FC</div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-600">Food Critic Weekly</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;
