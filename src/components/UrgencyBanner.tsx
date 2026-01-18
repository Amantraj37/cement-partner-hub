import { Zap, Phone } from "lucide-react";

const UrgencyBanner = () => {
  const phoneNumber = "+91-9876543210";

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-500 py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white text-center">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 animate-pulse" />
          <span className="font-bold">LIMITED TIME OFFER:</span>
        </div>
        <span className="font-medium">Get Extra 5% OFF on Bulk Orders This Week!</span>
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center gap-2 px-4 py-1.5 bg-white text-red-600 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default UrgencyBanner;
