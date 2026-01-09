import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCement from "@/assets/hero-cement.jpg";

const HeroSection = () => {
  const phoneNumber = "+91-9876543210";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCement}
          alt="Cement factory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">Trusted by 500+ Construction Partners</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Premium Bulk Cement <br />
            <span className="text-gradient">At Factory Prices</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            India's leading cement distribution network. Buy bulk cement at competitive rates or become a franchise partner and build your business with us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href={`tel:${phoneNumber}`}>
              <Button variant="hero" size="xl" className="gap-2 min-w-[200px]">
                <Phone className="w-5 h-5" />
                Call for Quote
              </Button>
            </a>
            <Button
              variant="heroOutline"
              size="xl"
              className="gap-2 min-w-[200px]"
              onClick={() => scrollToSection("franchise")}
            >
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "50K+", label: "Tons Delivered" },
              { value: "500+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "100+", label: "Franchise Partners" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
