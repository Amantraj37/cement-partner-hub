import { Phone, ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCement from "@/assets/hero-cement.jpg";

const HeroSection = () => {
  const phoneNumber = "+91-9876543210";
  const whatsappNumber = "919876543210";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCement}
          alt="UltraTech Cement Bulk Supply"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-8 animate-fade-in">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary-foreground font-semibold text-sm md:text-base">
              Authorized UltraTech Cement Distributor
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
            Buy <span className="text-secondary">UltraTech Cement</span>
            <br />
            <span className="text-gradient">At Lowest Prices</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in font-medium" style={{ animationDelay: "0.2s" }}>
            Bulk Cement Supply | Direct from Factory | Free Delivery | Franchise Available
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            {["100% Genuine Product", "Best Price Guarantee", "Pan-India Delivery"].map((point, i) => (
              <span key={i} className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-secondary" />
                {point}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href={`tel:${phoneNumber}`}>
              <Button variant="hero" size="xl" className="gap-3 min-w-[240px] text-lg shadow-xl hover:shadow-2xl">
                <Phone className="w-6 h-6" />
                Call for Best Price
              </Button>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I want to inquire about UltraTech cement bulk prices`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline" size="xl" className="gap-3 min-w-[240px] text-lg">
                <MessageCircle className="w-6 h-6" />
                WhatsApp Inquiry
              </Button>
            </a>
          </div>

          {/* Franchise CTA */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <button
              onClick={() => scrollToSection("franchise")}
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold transition-colors group"
            >
              Want to Start Your Own Cement Business? Become a Franchise Partner
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "1 Lakh+", label: "Tons Delivered" },
              { value: "10,000+", label: "Happy Customers" },
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "Franchise Partners" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Phone Number Display */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a 
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <Phone className="w-8 h-8 text-secondary animate-pulse" />
              <div className="text-left">
                <p className="text-primary-foreground/70 text-sm">Call Now for Instant Quote</p>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{phoneNumber}</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
