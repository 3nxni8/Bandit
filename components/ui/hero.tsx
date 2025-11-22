import HeroImage from "./HeroImage";
import HeroContent from "./Herocontent";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-[var(--color-white)] flex flex-col lg:flex-row overflow-hidden"
      aria-label="Hero section"
    >
      <HeroImage />
      <HeroContent />
    </section>
  );
};

export default Hero;
