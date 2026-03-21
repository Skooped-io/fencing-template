import { Shield, Users, Hammer, Award } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/project-1.jpg";

const team = [
  { name: "Tom Harrelson", role: "Founder & Lead Installer", years: "18 years experience" },
  { name: "Maria Vasquez", role: "Project Manager", years: "12 years experience" },
  { name: "Jake Morrison", role: "Senior Craftsman", years: "10 years experience" },
];

const values = [
  { icon: Hammer, title: "Craftsmanship First", desc: "Every fence we build reflects our commitment to quality. We use premium materials and time-tested techniques." },
  { icon: Shield, title: "Materials You Can Trust", desc: "We source lumber from certified mills and use commercial-grade hardware that won't rust, warp, or fail." },
  { icon: Award, title: "Industry-Leading Warranty", desc: "Lifetime warranty on all posts. 10-year warranty on materials and labor. We stand behind our work." },
  { icon: Users, title: "Family-Owned Values", desc: "We treat every property like our own. Direct communication with the owner — no call centers, no runaround." },
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="space-y-5">
            <h1>Built on Trust,<br />Backed by Craft</h1>
            <p className="text-muted-foreground max-w-lg">
              Precision Fence Co. was founded in 2008 by Tom Harrelson, a third-generation carpenter who grew up watching his grandfather build fences across rural Minnesota. What started as a two-person crew has grown into the region's most trusted fencing contractor.
            </p>
            <p className="text-muted-foreground max-w-lg">
              We've installed over 2,400 fences and counting. Every project gets the same attention to detail — whether it's a 50-foot garden border or a multi-acre ranch perimeter.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <img src={heroImg} alt="Precision Fence team on a job site" className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover" />
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <ScrollReveal>
          <h2 className="text-center mb-12">Why We're Different</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h2 className="text-center mb-12">Meet the Team</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 100}>
              <div className="bg-card rounded-lg p-6 shadow-sm text-center space-y-3">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-secondary-foreground font-heading font-bold text-lg">
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-primary font-medium">{m.role}</p>
                <p className="text-xs text-muted-foreground">{m.years}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
