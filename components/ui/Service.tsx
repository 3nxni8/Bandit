import { services } from "@/constants/Service";
import type { ServiceItem } from "@/types";

interface ServiceCardProps {
    item: ServiceItem;
    isLast: boolean;
}

const ServiceCard = ({ item, isLast }: ServiceCardProps) => {
    const Icon = item.icon;
    const borderClasses = !isLast ? 'border-b md:border-r lg:border-b-0' : '';
    return (
        <div className={`flex flex-col gap-4 p-8 border border-border ${borderClasses}`}>
            <Icon className="w-8 h-8" />
            <h3 className="font-serif text-2xl">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
    );
};

const ServicesSection = () => (
    <section className="w-full bg-background text-foreground py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
            {/* Section Header */}
            <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="flex flex-col items-center gap-4 mb-6">
                    <div className="h-12 w-[1px] bg-[var(--color-red)]" />
                    <span className="uppercase tracking-[0.3em] text-xs font-medium text-muted-foreground">Our Expertise</span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none text-[var(--color-red)]">
                    We provide elegant
                    <span className="block italic text-muted-foreground mt-2">service for people</span>
                </h2>
            </div>

            {/* Grid Container */}
            <div className="w-full border border-border shadow-sm animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((s, i) => (
                        <ServiceCard key={s.id} item={s} isLast={i === services.length - 1} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default ServicesSection;