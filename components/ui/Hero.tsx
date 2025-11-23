import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen  flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 overflow-hidden"
      aria-label="Hero section"
    >
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;
