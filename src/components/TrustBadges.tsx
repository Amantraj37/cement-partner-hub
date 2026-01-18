import { Shield, Award, Truck, Clock, CheckCircle, Star } from "lucide-react";

const badges = [
  { icon: Shield, text: "100% Genuine Products" },
  { icon: Award, text: "Authorized Dealer" },
  { icon: Truck, text: "Free Delivery" },
  { icon: Clock, text: "Same Day Dispatch" },
  { icon: CheckCircle, text: "Best Price Guarantee" },
  { icon: Star, text: "4.9★ Rated" },
];

const TrustBadges = () => {
  return (
    <section className="py-6 bg-primary border-y border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-primary-foreground/90"
            >
              <badge.icon className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium whitespace-nowrap">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
