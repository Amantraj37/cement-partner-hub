import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  const phoneNumber = "+91-9876543210";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-secondary to-orange-500 text-primary font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-slow group"
    >
      <Phone className="w-6 h-6 group-hover:animate-bounce" />
      <span className="hidden sm:inline">Call Now for Best Price</span>
      <span className="sm:hidden">Call Now</span>
    </a>
  );
};

export default FloatingCallButton;
