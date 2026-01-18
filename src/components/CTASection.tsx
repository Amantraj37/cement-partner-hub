import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const phoneNumber = "+91-9876543210";
  const whatsappNumber = "919876543210";

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Get Best Price for <span className="text-secondary">UltraTech Cement</span> Today!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Call now for instant quote. Bulk discounts available. Free delivery across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={`tel:${phoneNumber}`}>
              <Button variant="hero" size="xl" className="gap-3 min-w-[220px] text-lg">
                <Phone className="w-6 h-6" />
                {phoneNumber}
              </Button>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I want to inquire about UltraTech cement bulk prices`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline" size="xl" className="gap-3 min-w-[220px] text-lg">
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-secondary" />
              Instant Quote
            </span>
            <span className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-secondary" />
              Same Day Response
            </span>
            <span className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-secondary" />
              Best Price Match
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
