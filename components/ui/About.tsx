import { Flower2, ArrowRight } from "lucide-react";
import ImageCollage from "./imagecollage";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section className="w-full bg-white text-black overflow-hidden py-12 lg:py-24">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

                    {/* Left Column: Collage */}
                    <div className="w-full order-2 lg:order-1">
                        <ImageCollage />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full order-1 lg:order-2 flex">
                        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12">

                            {/* Decorative Icon */}
                            <div className="mb-8">
                                <Flower2 strokeWidth={1} className="w-12 h-12 text-black/80" />
                            </div>

                            {/* Headline */}
                            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-black">
                                Around the world, <br />
                                <span className="italic text-gray-500">one plate at a time</span>
                            </h2>

                            {/* Description */}
                            <p className="font-sans text-gray-600 leading-relaxed mb-10 max-w-md text-lg font-light">
                                Welcome to <strong className="text-black font-medium">La.Revi</strong>, one of the best restaurants in the country.
                                This is the place where food meets passion and where the world&rsquo;s finest chefs are creating culinary masterpieces
                                stripped of color, but full of life.
                            </p>

                            {/* Opening Hours */}
                            <div className="mb-12 space-y-4 border-l-2 border-black pl-6">
                                <h3 className="font-serif text-2xl mb-4 flex items-center gap-3">
                                    Opening Hours
                                </h3>

                                <div className="grid grid-cols-[80px_1fr] gap-y-2 font-sans text-sm tracking-wide">
                                    <span className="font-semibold text-black">Mon – Thu:</span>
                                    <span className="text-gray-600">10:00 am — 01:00 am</span>

                                    <span className="font-semibold text-black">Fri – Sun:</span>
                                    <span className="text-gray-600">10:00 am — 01:00 am</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/reservations"
                                className="group w-fit relative px-8 py-4 bg-transparent border border-black overflow-hidden transition-all hover:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
                            >
                                <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms] ease-out group-hover:w-full" />
                                <span className="relative text-black group-hover:text-white font-medium tracking-widest uppercase text-xs flex items-center gap-3">
                                    Find A Table
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
