import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+91-9876543210";
  const whatsappNumber = "919876543210";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-11 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="font-display text-lg md:text-xl font-bold text-foreground">
              <span className="text-secondary">UltraTech</span> Cement Agency
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("bulk")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Bulk Purchase
            </button>
            <button onClick={() => scrollToSection("franchise")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Franchise
            </button>
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I want to inquire about UltraTech cement prices`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="default" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <a href={`tel:${phoneNumber}`}>
              <Button variant="cta" size="default" className="gap-2">
                <Phone className="w-4 h-4" />
                {phoneNumber}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-3">
              <button onClick={() => scrollToSection("home")} className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection("bulk")} className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Bulk Purchase
              </button>
              <button onClick={() => scrollToSection("franchise")} className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Franchise
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Contact
              </button>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi, I want to inquire about UltraTech cement prices`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href={`tel:${phoneNumber}`}>
                  <Button variant="cta" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
