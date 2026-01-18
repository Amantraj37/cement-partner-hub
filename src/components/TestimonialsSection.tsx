import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Construction Company Owner",
    location: "Delhi",
    content: "Best prices for UltraTech cement! I've been ordering bulk for 3 years. Their delivery is always on time and the quality is consistent.",
    rating: 5,
  },
  {
    name: "Suresh Patel",
    role: "Civil Contractor",
    location: "Gujarat",
    content: "Switched to them after comparing 5 dealers. 15% savings on every order! Their customer service is excellent.",
    rating: 5,
  },
  {
    name: "Mohammed Hussain",
    role: "Builder",
    location: "Maharashtra",
    content: "Genuine UltraTech cement with proper invoicing. The franchise opportunity they offered changed my business completely.",
    rating: 5,
  },
  {
    name: "Venkat Rao",
    role: "Infrastructure Developer",
    location: "Karnataka",
    content: "Ordered 50,000 bags for our highway project. Timely delivery and excellent credit terms. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">10,000+ Customers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers say about their experience with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
