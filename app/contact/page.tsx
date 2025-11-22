import {Banner} from "@/components/ui/Banner";
import {InstagramFeed} from "@/components/ui/InstagramFeed";

const ContactPage = () => {
  return (
   <main>
       <Banner
         title="Get in Touch"
         subtitle="We'd love to hear from you"
       />

       <InstagramFeed/>
   </main>
  );
};

export default ContactPage;
