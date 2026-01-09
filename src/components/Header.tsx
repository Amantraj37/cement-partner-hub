import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+91-9876543210";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
              <span className="text-primary font-display font-bold text-lg">CB</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">CementBulk</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
              About Us
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${phoneNumber}`}>
              <Button variant="cta" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
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
            <nav className="flex flex-col gap-4">
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
                About Us
              </button>
              <a href={`tel:${phoneNumber}`} className="mt-2">
                <Button variant="cta" size="lg" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
