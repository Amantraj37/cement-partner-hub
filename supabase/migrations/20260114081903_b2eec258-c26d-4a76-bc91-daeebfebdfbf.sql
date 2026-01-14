-- Create a table for storing contact form inquiries
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  pin_code TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting data (anyone can submit an inquiry)
CREATE POLICY "Anyone can submit an inquiry" 
ON public.inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading (only authenticated admins should read, but for now we'll allow service role)
CREATE POLICY "Service role can read inquiries" 
ON public.inquiries 
FOR SELECT 
USING (false);