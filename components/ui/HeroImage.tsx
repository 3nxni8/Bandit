import Image from "next/image";

const HeroImage = () => {
    return (
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden group">
            {/* Main Image with Parallax-like Hover Scale */}
            <div className="w-full h-full overflow-hidden relative">
                <Image
                    src="/images/hero.png"
                    alt="Artisan Croissant"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover  transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    priority
                />
            </div>

            {/* Floating Review Badge - Desktop Only */}
            <div className="absolute bottom-12 left-12 hidden md:block opacity-0 lg:animate-in lg:fade-in lg:slide-in-from-left-8 lg:duration-1000 lg:delay-500 lg:fill-mode-forwards">
                <div className="bg-white/80 backdrop-blur-md p-6 border-l-4 border-black shadow-2xl max-w-xs">
                    <p className="font-serif italic text-xl text-black leading-snug">
                        &ldquo;A symphony of textures that redefines pastry.&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-black/10">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-serif text-xs">FC</div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-600">Food Critic Weekly</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;
