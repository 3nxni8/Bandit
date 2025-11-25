import AboutSection from "@/components/ui/About";
import { StorySection } from "@/components/ui/StorySection";
import ServicesSection from "@/components/ui/Service";
import {Banner} from "@/components/ui/Banner";
import {InstagramFeed} from "@/components/ui/InstagramFeed";
import GamesSection from "@/components/ui/GamesSection";

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full">
        <Banner
            title={"About Us"}
            subtitle={"Learn more about our journey and values"} />
      <AboutSection />
      <GamesSection />
      <StorySection />
      <InstagramFeed />
      <ServicesSection />
    </main>
  );
};

export default AboutPage;
