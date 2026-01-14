import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  fullName: string;
  mobileNumber: string;
  email: string;
  address: string;
  pinCode: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, mobileNumber, email, address, pinCode }: InquiryRequest = await req.json();

    console.log("Received inquiry from:", fullName, email);

    // Save to database using service role
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from("inquiries")
      .insert({
        full_name: fullName,
        mobile_number: mobileNumber,
        email: email,
        address: address,
        pin_code: pinCode,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save inquiry: ${dbError.message}`);
    }

    console.log("Inquiry saved to database");

    // Send email notification to admin
    const adminEmail = Deno.env.get("ADMIN_EMAIL") || "admin@example.com";
    
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CementBulk Inquiries <onboarding@resend.dev>",
        to: [adminEmail],
        subject: `New Inquiry from ${fullName}`,
        html: `
          <h1>New Bulk Cement Inquiry</h1>
          <h2>Customer Details:</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr style="background-color: #f4f4f4;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Mobile Number</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${mobileNumber}</td>
            </tr>
            <tr style="background-color: #f4f4f4;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Address</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${address}</td>
            </tr>
            <tr style="background-color: #f4f4f4;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Pin Code</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${pinCode}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #666;">This inquiry was submitted through the CementBulk website.</p>
        `,
      }),
    });

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-inquiry-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
