import { Shield, Truck, BadgePercent, Headphones, Factory, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Direct from Factory",
    description: "No middlemen. Get cement directly from UltraTech plants at wholesale rates.",
  },
  {
    icon: BadgePercent,
    title: "Lowest Price Guarantee",
    description: "We guarantee the lowest prices. Find lower? We'll match it + 2% extra off.",
  },
  {
    icon: Truck,
    title: "Free Pan-India Delivery",
    description: "Free delivery to any location in India. On-time, every time.",
  },
  {
    icon: Shield,
    title: "100% Genuine Products",
    description: "Only authentic UltraTech cement with manufacturer warranty.",
  },
  {
    icon: FileCheck,
    title: "GST Invoice & Credit",
    description: "Proper GST billing. Credit facility for regular customers.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "Your personal account manager available round the clock.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            India's Most Trusted <span className="text-gradient">UltraTech Dealer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join 10,000+ satisfied customers who trust us for their cement needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
