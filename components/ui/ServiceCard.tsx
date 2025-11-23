import { Sparkles } from "lucide-react";
import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  item: ServiceItem;
  isLast: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, isLast }) => {
  return (
    <div
      className={`group relative flex flex-col items-center text-center p-10 lg:p-14 h-full transition-colors duration-500 ease-out hover:bg-[var(--color-red)] hover:text-white cursor-default ${!isLast ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}
    >
      {/* Icon Container */}
      <div className="mb-8 relative">
        <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center transition-all duration-500 group-hover:border-white/30 group-hover:scale-110">
          <item.icon strokeWidth={1} className="w-7 h-7 text-foreground transition-colors duration-500 group-hover:text-gold" />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-serif text-2xl mb-4 tracking-wide">{item.title}</h3>
      <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground group-hover:text-gray-300 transition-colors duration-500 max-w-[200px]">{item.description}</p>

      {/* Decorative accent */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles size={12} className="text-white/40" />
      </div>
    </div>
  );
};

export default ServiceCard;