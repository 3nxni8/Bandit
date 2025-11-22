"use client";

import { services } from "@/constants/Service";
import type { ServiceItem } from "@/types";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

interface ServiceCardProps {
    item: ServiceItem;
    isLast: boolean;
    index: number;
    isVisible: boolean;
}

const ServiceCard = ({ item, isLast, index, isVisible }: ServiceCardProps) => {
    const Icon = item.icon;
    const borderClasses = !isLast ? 'border-b md:border-r lg:border-b-0' : '';
    const delay = index * 100;
    
    return (
        <div 
            className={`flex flex-col gap-4 p-8 border border-border ${borderClasses} transition-all duration-700`}
            style={{ 
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
        >
            <Icon className="w-8 h-8" />
            <h3 className="font-serif text-2xl">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
    );
};

const ServicesSection = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ 
        threshold: 0.1,
        triggerOnce: true 
    });

    return (
        <section 
            ref={ref}
            className="w-full bg-background text-foreground py-24 px-6 md:px-12 lg:px-20"
            aria-labelledby="services-heading"
        >
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${
                    isIntersecting 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                }`}>
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="h-12 w-[1px] bg-[var(--color-red)]" />
                        <span className="uppercase tracking-[0.3em] text-xs font-medium text-muted-foreground">Our Expertise</span>
                    </div>
                    <h2 id="services-heading" className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none text-[var(--color-red)]">
                        We provide elegant
                        <span className="block italic text-muted-foreground mt-2">service for people</span>
                    </h2>
                </div>

                {/* Grid Container */}
                <div className="w-full border border-border shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((s, i) => (
                            <ServiceCard 
                                key={s.id} 
                                item={s} 
                                isLast={i === services.length - 1}
                                index={i}
                                isVisible={isIntersecting}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;