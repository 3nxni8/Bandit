import Image from "next/image";


const ImageCollage = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
            {/* Background Image (Top Left) - Restaurant Interior */}
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
            {/* Foreground Image (Bottom Right) - Cocktail Detail */}
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


            {/* Decorative Element on overlap */}
            <div className="absolute bottom-[55%] right-[50%] translate-x-1/2 translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full border border-black/10 shadow-lg hidden md:flex md:items-center md:justify-center">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            </div>
        </div>
    );
};

export default ImageCollage;
