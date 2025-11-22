import type { ComponentType, SVGProps } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import CircleButton from "./CircleButton";

const SocialLink = ({
  Icon,
  href = "#",
  label,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
  label?: string;
}) => (
  <a
    href={href}
    aria-label={label}
    className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-black)]"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const HeroContent = () => {
  return (
    <div
      className="w-full lg:w-1/2 h-auto lg:h-screen flex flex-col justify-center relative z-10 bg-[var(--color-white)] px-6 py-16 lg:px-24"
      role="region"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-start animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="relative mb-8">
          <h1
            id="hero-heading"
            className="font-serif text-[15vw] md:text-8xl lg:text-[7rem] xl:text-[8rem] leading-[0.9] text-[var(--color-black)] tracking-tighter relative z-10"
          >
            LaExotic
          </h1>
          <h2
            aria-hidden="true"
            className="font-serif text-[15vw] md:text-8xl lg:text-[7rem] xl:text-[8rem] leading-[0.9] tracking-tighter absolute top-[0.5em] left-[0.5em] z-0 select-none pointer-events-none"
            style={{ WebkitTextStroke: "1px var(--color-black)", color: "transparent" }}
          >
            Dishes
          </h2>
        </div>
        <div className="mt-12 md:mt-16 max-w-md border-l border-[var(--border)] pl-6 ml-2">
          <p className="text-[color:#4b5563] text-base md:text-lg font-light leading-relaxed">
            Truly exotic and appetizing cuisine for those special moments in life. We strip away the noise to focus on pure,
            unadulterated flavor.
          </p>
        </div>
        <CircleButton />
        <div className="mt-16 md:mt-auto lg:absolute lg:bottom-12 lg:right-12 flex flex-col items-start lg:items-end gap-4">
          <div className="flex gap-6" aria-label="Social media links">
            <SocialLink Icon={Instagram} label="Instagram" />
            <SocialLink Icon={Facebook} label="Facebook" />
            <SocialLink Icon={Twitter} label="Twitter / X" />
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase font-medium opacity-40 text-[var(--color-black)]">
            Est. MMXIV  Paris
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
