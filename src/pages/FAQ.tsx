import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHead from "@/components/PageHead";
import { seoConfig } from "@/lib/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How deep are fence posts set?",
    a: "We set posts at a minimum of 36 inches deep — below the frost line in our region. For taller fences (8 ft+), we go 42–48 inches. All posts are set in concrete with a slight crown to shed water away from the base.",
  },
  {
    q: "Do you handle HOA approvals?",
    a: "Yes. We prepare all required documentation including site plans, material specs, and color samples. We submit directly to your HOA and handle any follow-up questions. Most approvals come through within 2–3 weeks.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential fences (100–300 linear feet) are completed in 1–3 days. Larger properties or custom projects may take 4–5 days. We'll give you a specific timeline during your estimate.",
  },
  {
    q: "Do I need a survey before installing a fence?",
    a: "We strongly recommend it. If you don't have a recent survey, we can coordinate with a licensed surveyor to mark your property lines. This protects you from encroachment issues and potential disputes with neighbors.",
  },
  {
    q: "What's the difference between cedar and pine?",
    a: "Cedar is naturally rot and insect resistant, weathers to a silver-gray patina, and typically lasts 15–20+ years. Pressure-treated pine is more affordable, very durable (15+ years), but requires staining or sealing every 2–3 years to look its best. Both are excellent choices — it comes down to budget and maintenance preference.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes, we partner with a local credit union to offer 0% financing for 12 months on projects over $3,000. Longer terms are available with competitive rates. Ask about financing during your estimate appointment.",
  },
  {
    q: "What happens if my fence is damaged after installation?",
    a: "Our lifetime post warranty covers any post failure due to materials or workmanship. For storm damage or other issues, we offer priority repair scheduling for past customers. Most repairs can be completed within a week of your call.",
  },
  {
    q: "Can you remove my old fence?",
    a: "Absolutely. Old fence removal and disposal is included in most project quotes at no extra charge. If it's a standalone removal (no new fence), we charge a flat rate based on linear footage.",
  },
];

const FAQ = () => (
  <Layout>
    <PageHead title={seoConfig.seo.faq.title} description={seoConfig.seo.faq.description} />

    <section className="section-padding">
      <div className="container-main max-w-3xl">
        <ScrollReveal>
          <h1 className="text-center">Frequently Asked Questions</h1>
          <p className="text-center text-muted-foreground mt-3">
            Common questions about fence installation, materials, and our process.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12 space-y-3">
            <p className="text-muted-foreground">Still have questions?</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default FAQ;
