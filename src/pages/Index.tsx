import { Link } from "react-router-dom";
import { Shield, Wrench, Ruler, Award, ArrowRight, Star, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

import heroImg from "@/assets/hero-fence.jpg";
import fenceWood from "@/assets/fence-wood.jpg";
import fenceVinyl from "@/assets/fence-vinyl.jpg";
import fenceAluminum from "@/assets/fence-aluminum.jpg";
import fenceChainlink from "@/assets/fence-chainlink.jpg";
import fenceFarm from "@/assets/fence-farm.jpg";
import fenceCustom from "@/assets/fence-custom.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const fenceTypes = [
  { name: "Wood Privacy", desc: "Classic cedar and pine privacy fences with customizable heights and styles.", img: fenceWood },
  { name: "Vinyl", desc: "Low-maintenance vinyl fencing available in white, tan, and woodgrain finishes.", img: fenceVinyl },
  { name: "Aluminum & Iron", desc: "Elegant ornamental fencing for security and curb appeal.", img: fenceAluminum },
  { name: "Chain Link", desc: "Durable and affordable fencing for yards, sports areas, and commercial properties.", img: fenceChainlink },
  { name: "Farm & Ranch", desc: "Split rail, post-and-board, and agricultural fencing built to last.", img: fenceFarm },
  { name: "Custom & Decorative", desc: "One-of-a-kind gates, arbors, and decorative fence designs.", img: fenceCustom },
];

const features = [
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed contractor with comprehensive liability and workers' comp coverage." },
  { icon: Wrench, title: "Custom Builds Available", desc: "From standard styles to fully custom designs tailored to your property." },
  { icon: Ruler, title: "Property Line Surveys", desc: "We coordinate with surveyors to ensure precise placement every time." },
  { icon: Award, title: "Lifetime Warranty on Posts", desc: "Our steel-reinforced posts are guaranteed for the life of your fence." },
];

const projects = [
  { img: project1, type: "Cedar Privacy Fence", location: "Maplewood, MN", desc: "240 linear feet of 6-foot cedar privacy fencing with a custom arched gate." },
  { img: project2, type: "Modern Horizontal Slat", location: "Edina, MN", desc: "Contemporary dark-stained horizontal fence with stainless steel hardware." },
  { img: project3, type: "Pool Safety Fence", location: "Plymouth, MN", desc: "Code-compliant aluminum pool enclosure with self-closing gate system." },
];

const steps = [
  { num: "01", title: "Free Estimate", desc: "We visit your property, take measurements, and discuss your needs." },
  { num: "02", title: "Design & Plan", desc: "Choose materials, style, and layout. We handle permits and HOA approvals." },
  { num: "03", title: "Professional Installation", desc: "Our crew installs your fence with precision and care — typically in 1-3 days." },
  { num: "04", title: "Final Inspection", desc: "Walk-through to ensure everything meets our standards and your expectations." },
];

const testimonials = [
  { name: "Margaret Lindgren", text: "They replaced our old chain link with a beautiful cedar fence. The crew was professional, on time, and left the yard spotless. Couldn't be happier.", rating: 5 },
  { name: "David Kowalski", text: "Got three estimates and Precision Fence was the most thorough. They handled our HOA paperwork and the aluminum fence looks incredible around the pool.", rating: 5 },
  { name: "Sarah Chen", text: "Our vinyl fence has held up through two harsh winters without a single issue. The lifetime post warranty gave us real peace of mind.", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="container-main grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 md:px-8 py-12 md:py-20 lg:py-28">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent font-medium text-sm">
            <Award className="w-4 h-4" />
            Trusted Since 2008
          </div>
          <h1 className="text-foreground">
            Quality Fences<br />Built to Last
          </h1>
          <p className="text-muted-foreground max-w-lg text-lg">
            Enhance your property's value, security, and curb appeal with expertly crafted fences. From classic wood privacy to modern aluminum — installed right, guaranteed.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/fence-styles">View Our Fence Styles</Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500" /> 2,400+ fences installed</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500" /> 15+ years experience</span>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Beautiful cedar privacy fence installation in a residential backyard"
            className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg p-4 hidden md:flex items-center gap-3">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
            </div>
            <span className="text-sm font-medium">4.9 rating · 380+ reviews</span>
          </div>
        </div>
      </div>
    </section>

    {/* Fence Types Grid */}
    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2>Our Fence Styles</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From traditional wood privacy to modern aluminum — we install every major fence type with expert craftsmanship.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fenceTypes.map((fence, i) => (
            <ScrollReveal key={fence.name} delay={i * 80}>
              <Link
                to="/fence-styles"
                className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={fence.img}
                    alt={fence.name + " fence"}
                    className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold flex items-center justify-between">
                    {fence.name}
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{fence.desc}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Fence With Us */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2>Why Fence With Us</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We're not just installers — we're craftsmen who take pride in every post, rail, and picket.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className="text-center space-y-3">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Project Showcase */}
    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <h2>Featured Projects</h2>
              <p className="text-muted-foreground mt-2">Recent installations we're proud of.</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/gallery">See All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                <img src={p.img} alt={p.type} className="w-full aspect-[3/2] object-cover" />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{p.type}</span>
                    <span className="text-xs text-muted-foreground">{p.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2>How It Works</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From first call to final walk-through — a simple, transparent process.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 100}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/10">{s.num}</span>
                <h3 className="text-lg font-semibold mt-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-5 h-5 text-border" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2>What Our Customers Say</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-lg p-6 shadow-sm space-y-4">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed italic">"{t.text}"</p>
                <p className="text-sm font-semibold">{t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="dark-section section-padding">
      <div className="container-main text-center space-y-6">
        <ScrollReveal>
          <h2>Ready for a New Fence?</h2>
          <p className="text-dark-section-foreground/70 max-w-xl mx-auto mt-3">
            Get your free, no-obligation estimate today. We'll visit your property, discuss your needs, and provide a detailed quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link to="/contact">Request Your Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-dark-section-foreground/20 text-dark-section-foreground hover:bg-dark-section-foreground/10" asChild>
              <a href="tel:5551234567">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
