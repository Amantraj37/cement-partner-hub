import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const phoneNumber = "+91-9876543210";

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
              About Us
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Building India's <span className="text-gradient">Foundation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With over 15 years in the cement distribution industry, CementBulk has established itself as a trusted partner for construction companies, contractors, and infrastructure developers across India.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We work directly with major cement manufacturers including UltraTech, ACC, Ambuja, Shree Cement, and more to bring you the best quality products at competitive prices.
            </p>

            {/* Brand Logos Placeholder */}
            <div className="flex flex-wrap gap-4 items-center mb-8 pb-8 border-b border-border">
              {["UltraTech", "ACC", "Ambuja", "Shree"].map((brand, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card rounded-lg shadow-card text-muted-foreground font-semibold"
                >
                  {brand}
                </div>
              ))}
            </div>

            <a href={`tel:${phoneNumber}`}>
              <Button variant="cta" size="xl" className="gap-2">
                <Phone className="w-5 h-5" />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Contact Info Card */}
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="font-display text-2xl font-bold mb-8">Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Head Office</h4>
                  <p className="text-primary-foreground/70">
                    123 Industrial Area, Sector 5<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href={`tel:${phoneNumber}`} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {phoneNumber}
                  </a>
                  <p className="text-primary-foreground/50 text-sm mt-1">Toll Free: 1800-XXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:info@cementbulk.in" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    info@cementbulk.in
                  </a>
                  <p className="text-primary-foreground/50 text-sm mt-1">sales@cementbulk.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-primary-foreground/70">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
