import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BulkPurchaseSection from "@/components/BulkPurchaseSection";
import FranchiseSection from "@/components/FranchiseSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BulkPurchaseSection />
        <FranchiseSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
