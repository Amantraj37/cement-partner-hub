import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { z } from "zod";

const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  mobileNumber: z.string().trim().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email must be less than 255 characters"),
  address: z.string().trim().min(10, "Address must be at least 10 characters").max(500, "Address must be less than 500 characters"),
  pinCode: z.string().trim().regex(/^[0-9]{6}$/, "Enter a valid 6-digit pin code"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const InquiryForm = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    mobileNumber: "",
    email: "",
    address: "",
    pinCode: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof InquiryFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof InquiryFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-inquiry-email", {
        body: result.data,
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ fullName: "Something went wrong. Please try again or call us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-elevated text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full accent-gradient flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-6">
          Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: "",
              mobileNumber: "",
              email: "",
              address: "",
              pinCode: "",
            });
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elevated">
      <h3 className="font-display text-xl font-bold text-foreground mb-6">
        Get a Free Quote
      </h3>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "border-destructive" : ""}
          />
          {errors.fullName && (
            <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="mobileNumber">Mobile Number *</Label>
          <Input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className={errors.mobileNumber ? "border-destructive" : ""}
          />
          {errors.mobileNumber && (
            <p className="text-destructive text-sm mt-1">{errors.mobileNumber}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="address">Address *</Label>
          <Textarea
            id="address"
            name="address"
            placeholder="Enter your complete address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "border-destructive" : ""}
            rows={3}
          />
          {errors.address && (
            <p className="text-destructive text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <Label htmlFor="pinCode">Pin Code *</Label>
          <Input
            id="pinCode"
            name="pinCode"
            placeholder="6-digit pin code"
            value={formData.pinCode}
            onChange={handleChange}
            className={errors.pinCode ? "border-destructive" : ""}
          />
          {errors.pinCode && (
            <p className="text-destructive text-sm mt-1">{errors.pinCode}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full gap-2 mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Inquiry
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default InquiryForm;
