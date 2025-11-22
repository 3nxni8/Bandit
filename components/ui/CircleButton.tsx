import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CircleButton = () => {
    return (
        <div className="mt-12 relative group w-max">
            <Link
                href="/menu"
                prefetch={false}
                aria-label="View our menus"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-black flex items-center justify-center overflow-hidden bg-transparent transition-transform duration-500 ease-out group-hover:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
            >

                {/* Fill Animation Layer */}
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full" />

                {/* Text Layer */}
                <span className="relative z-10 text-center font-serif text-lg md:text-xl leading-tight transition-colors duration-300 group-hover:text-white">
          Our <br/> <span className="italic">Menus</span>
        </span>
            </Link>

            {/* Floating Arrow Interaction */}
            <div
                className="absolute left-36 md:left-44 top-1/2 -translate-y-1/2 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100"
                aria-hidden="true"
            >
                <ArrowRight className="w-8 h-8" />
            </div>
        </div>
    );
};

export default CircleButton;
