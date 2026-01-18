import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import BulkPurchaseSection from "@/components/BulkPurchaseSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FranchiseSection from "@/components/FranchiseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import UrgencyBanner from "@/components/UrgencyBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <BulkPurchaseSection />
        <WhyChooseUs />
        <FranchiseSection />
        <TestimonialsSection />
        <CTASection />
        <AboutSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
