import { useState } from "react";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const fenceOptions = ["Wood Privacy", "Vinyl", "Aluminum / Iron", "Chain Link", "Farm & Ranch", "Custom / Decorative", "Not Sure — Need Advice"];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="text-center">Get Your Free Estimate</h1>
            <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
              Fill out the form below and we'll get back to you within one business day with a detailed estimate.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            <ScrollReveal className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900">Estimate Request Received!</h3>
                  <p className="text-sm text-green-700">We'll contact you within 1 business day to schedule your free on-site estimate.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                      <Input required placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone *</label>
                      <Input required type="tel" placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <Input required type="email" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Property Address</label>
                    <Input placeholder="123 Main St, City, State" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Fence Type Interest</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select a type...</option>
                        {fenceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Approx. Linear Feet</label>
                      <Input type="number" placeholder="e.g., 150" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <Textarea placeholder="Tell us about your project — any special requirements, timeline, etc." rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Estimate Request
                  </Button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-2" delay={150}>
              <div className="bg-card rounded-lg border p-6 space-y-6">
                <h3 className="text-lg font-semibold">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <a href="tel:5551234567" className="text-sm font-medium hover:text-primary transition-colors">(555) 123-4567</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <a href="mailto:info@precisionfence.com" className="text-sm font-medium hover:text-primary transition-colors">info@precisionfence.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Service Area</p>
                      <p className="text-sm font-medium">Twin Cities Metro & surrounding counties within 60 miles</p>
                    </div>
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground">License #FEN-2024-1847</p>
                  <p className="text-xs text-muted-foreground mt-1">Fully Licensed & Insured</p>
                </div>

                {/* Map placeholder */}
                <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-40" />
                    <p className="text-sm">Service Area Map</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
