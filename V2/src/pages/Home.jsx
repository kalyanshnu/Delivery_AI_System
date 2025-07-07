import Header from "../Components/Common/Header";
import HeroSection from "../Components/Home/hero/HeroSection";
import FeaturesSection from "../Components/Home/features/FeaturesSection";
import EcoSection from "../Components/Home/EcoSection/EcoSection";
import ProcessSection from "../Components/Home/process/ProcessSection";
import CTASection from "../Components/Home/cta/CTASection";
import TestimonialSection from "../Components/Home/testimonial/TestimonialSection";
import StatSection from "../Components/Home/stats/StatSection";
import FooterSection from "../Components/Common/FooterSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <EcoSection />
      <ProcessSection />
      <CTASection />
      <TestimonialSection />
      <StatSection />
      <FooterSection />
    </div>
  );
};

export default Home;
