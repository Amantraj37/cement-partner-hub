import { Truck, Package, Shield, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Truck,
    title: "Direct Delivery",
    description: "Factory-to-site delivery across all major cities. No middlemen, no delays.",
  },
  {
    icon: Package,
    title: "All Grades Available",
    description: "OPC, PPC, PSC, and specialty cement grades for every construction need.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO certified products from top brands. Every batch tested for consistency.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock order tracking and dedicated relationship managers.",
  },
];

const BulkPurchaseSection = () => {
  const phoneNumber = "+91-9876543210";

  return (
    <section id="bulk" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
            <Package className="w-4 h-4" />
            Bulk Purchase
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Bulk Cement at <span className="text-gradient">Wholesale Rates</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you need 100 bags or 10,000 tons, we deliver premium cement at factory prices with guaranteed quality and timely delivery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Small Projects",
              quantity: "100 - 500 Bags",
              discount: "5% Off MRP",
              features: ["Free delivery within city", "48-hour dispatch", "Basic support"],
            },
            {
              title: "Medium Projects",
              quantity: "500 - 5000 Bags",
              discount: "12% Off MRP",
              features: ["Pan-India free delivery", "24-hour dispatch", "Priority support", "Flexible payment terms"],
              highlighted: true,
            },
            {
              title: "Large Projects",
              quantity: "5000+ Bags",
              discount: "20% Off MRP",
              features: ["Dedicated fleet", "Same-day dispatch", "Dedicated account manager", "Credit facility available"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground ring-4 ring-secondary/30 scale-105"
                  : "bg-card text-card-foreground shadow-card"
              } transition-all duration-300`}
            >
              <h3 className="font-display text-xl font-bold mb-2">{plan.title}</h3>
              <p className={`text-sm mb-4 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.quantity}
              </p>
              <div className="text-3xl font-display font-bold mb-6">
                {plan.discount}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.highlighted ? "bg-secondary" : "bg-secondary"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={`tel:${phoneNumber}`}>
                <Button
                  variant={plan.highlighted ? "hero" : "outline"}
                  className="w-full gap-2"
                  size="lg"
                >
                  <Phone className="w-4 h-4" />
                  Get Quote
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BulkPurchaseSection;
