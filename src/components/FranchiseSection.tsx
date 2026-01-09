import { Building2, TrendingUp, Users, Award, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Profit Margins",
    description: "Enjoy 15-25% profit margins with exclusive territory rights.",
  },
  {
    icon: Building2,
    title: "Low Investment",
    description: "Start with minimal investment. No godown required initially.",
  },
  {
    icon: Users,
    title: "Complete Training",
    description: "Comprehensive business training and ongoing mentorship.",
  },
  {
    icon: Award,
    title: "Brand Power",
    description: "Leverage our established brand and marketing support.",
  },
];

const requirements = [
  "Minimum investment of ₹5-10 Lakhs",
  "Dedicated space for office/showroom",
  "Entrepreneurial mindset",
  "Local market knowledge",
  "Commitment to quality service",
  "Valid business registration",
];

const FranchiseSection = () => {
  const phoneNumber = "+91-9876543210";

  return (
    <section id="franchise" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
              <Building2 className="w-4 h-4" />
              Partnership Opportunity
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Become a <span className="text-gradient">Franchise Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Join India's fastest-growing cement distribution network. We're looking for ambitious entrepreneurs to partner with us and build a profitable business in the construction materials industry.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={`tel:${phoneNumber}`}>
              <Button variant="cta" size="xl" className="gap-2">
                <Phone className="w-5 h-5" />
                Apply for Franchise
              </Button>
            </a>
          </div>

          {/* Right Content - Requirements Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-secondary/5 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-2xl p-8 shadow-elevated border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Franchise Requirements
              </h3>
              <ul className="space-y-4 mb-8">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Franchise Helpline</p>
                    <a href={`tel:${phoneNumber}`} className="font-display text-xl font-bold text-foreground hover:text-secondary transition-colors">
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Call now to speak with our franchise team. Available Mon-Sat, 9 AM - 6 PM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
