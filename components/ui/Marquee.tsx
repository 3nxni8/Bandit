import React from 'react';
import Image from 'next/image';

const marqueeItems = [
    { text: "Paksi Borito", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop" },
    { text: "Mint Logan", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop" },
    { text: "LaEspresso", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop"  },
    { text: "Blue Moon Meat", img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop"  },
    { text: "Maragarito", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop" },
];

export const Marquee: React.FC = () => {
    return (
        <div className="w-full  py-6 overflow-hidden relative" role="region" aria-label="Featured dishes">
            {/* Inline style for the custom animation with performance optimization */}
            <style>
                {`
          @keyframes scroll {
            0% { 
              transform: translate3d(0, 0, 0); 
            }
            100% { 
              transform: translate3d(-50%, 0, 0); 
            }
          }
          .animate-marquee {
            animation: scroll 20s linear infinite;
            will-change: transform;
          }
          
          /* Pause animation on hover for better UX */
          .marquee-wrapper:hover .animate-marquee {
            animation-play-state: paused;
          }
          
          /* Respect reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none;
            }
          }
        `}
            </style>

            <div className="marquee-wrapper">
                <div className="flex whitespace-nowrap animate-marquee w-max">
                    {/* Render items twice to create seamless loop */}
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <div key={idx} className="flex items-center mx-8">
                            <span className="text-3xl md:text-5xl font-serif text-white mr-6">
                                {item.text}
                            </span>
                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                <Image
                                    src={item.img}
                                    alt={item.text}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
