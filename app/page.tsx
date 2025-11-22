import Hero from "@/components/ui/Hero";
import AboutSection from "@/components/ui/About";
import ServicesSection from "@/components/ui/Service";
import {InstagramFeed} from "@/components/ui/InstagramFeed";
import {Marquee} from "@/components/ui/Marquee";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Marquee />
      <Marquee/>
      <InstagramFeed/>

    </>
  );
};

export default HomePage;