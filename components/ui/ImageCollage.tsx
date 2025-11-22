import Image from "next/image";


const ImageCollage = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center group">
            {/* Background Image (Top Left) - Restaurant Interior with optimized hover */}
            <div className="w-full h-full overflow-hidden relative">
                <Image
                    src="/images/hero.png"
                    alt="Restaurant interior ambiance"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    style={{ willChange: 'transform' }}
                    priority
                />
            </div>
            {/* Foreground Image (Bottom Right) - Cocktail Detail with optimized hover */}
            <div className="w-full h-full overflow-hidden relative">
                <Image
                    src="/images/hero.png"
                    alt="Signature cocktail detail"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    style={{ willChange: 'transform' }}
                    priority
                />
            </div>


            {/* Decorative Element on overlap with optimized animation */}
            <div className="absolute bottom-[55%] right-[50%] translate-x-1/2 translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full border border-black/10 shadow-lg hidden md:flex md:items-center md:justify-center">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            </div>
        </div>
    );
};

export default ImageCollage;
