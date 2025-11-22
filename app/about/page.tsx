import AboutSection from "@/components/ui/About";
import { StorySection } from "@/components/ui/StorySection";
import ServicesSection from "@/components/ui/Service";
import {Banner} from "@/components/ui/Banner";
import {InstagramFeed} from "@/components/ui/InstagramFeed";

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full">
        <Banner
            title={"About Us"}
            subtitle={"Learn more about our journey and values"} />
      <AboutSection />
      <StorySection />
      <InstagramFeed />
      <ServicesSection />
    </main>
  );
};

export default AboutPage;
