import { Phone } from "lucide-react";

const Footer = () => {
  const phoneNumber = "+91-9876543210";

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
              <span className="text-primary font-display font-bold text-lg">CB</span>
            </div>
            <span className="font-display font-bold text-xl text-primary-foreground">CementBulk</span>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Home
            </a>
            <a href="#bulk" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Bulk Purchase
            </a>
            <a href="#franchise" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Franchise
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </a>
          </nav>

          {/* Phone */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {phoneNumber}
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} CementBulk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
