import { Check, X } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHead from "@/components/PageHead";
import { seoConfig, getImage, slugify } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import fenceWood from "@/assets/fence-wood.jpg";
import fenceVinyl from "@/assets/fence-vinyl.jpg";
import fenceAluminum from "@/assets/fence-aluminum.jpg";
import fenceChainlink from "@/assets/fence-chainlink.jpg";
import fenceFarm from "@/assets/fence-farm.jpg";
import fenceCustom from "@/assets/fence-custom.jpg";

const styles = [
  {
    name: "Wood Privacy",
    img: fenceWood,
    slot: "fence_wood",
    materials: "Western Red Cedar, Pressure-Treated Pine, Redwood",
    pros: ["Natural beauty", "Customizable height & style", "Excellent privacy", "Can be stained any color"],
    cons: ["Requires periodic maintenance", "Susceptible to rot without treatment"],
    tiers: { good: "$28–35/ft", better: "$38–48/ft", best: "$52–65/ft" },
  },
  {
    name: "Vinyl",
    img: fenceVinyl,
    slot: "fence_vinyl",
    materials: "Commercial-Grade PVC, UV-Stabilized Vinyl",
    pros: ["Zero maintenance", "Won't rot, warp, or peel", "25-year color warranty", "Multiple styles available"],
    cons: ["Higher upfront cost", "Limited color options", "Can crack in extreme cold"],
    tiers: { good: "$32–40/ft", better: "$42–55/ft", best: "$58–72/ft" },
  },
  {
    name: "Aluminum & Iron",
    img: fenceAluminum,
    slot: "fence_aluminum",
    materials: "Powder-Coated Aluminum, Wrought Iron",
    pros: ["Elegant appearance", "Extremely durable", "Low maintenance", "Won't obstruct views"],
    cons: ["No privacy", "Higher cost for iron", "Can dent (aluminum)"],
    tiers: { good: "$30–42/ft", better: "$45–60/ft", best: "$65–90/ft" },
  },
  {
    name: "Chain Link",
    img: fenceChainlink,
    slot: "fence_chainlink",
    materials: "Galvanized Steel, Vinyl-Coated Steel",
    pros: ["Most affordable option", "Very durable", "Low maintenance", "Quick installation"],
    cons: ["Minimal privacy", "Less aesthetic appeal"],
    tiers: { good: "$15–22/ft", better: "$24–32/ft", best: "$35–45/ft" },
  },
  {
    name: "Farm & Ranch",
    img: fenceFarm,
    slot: "fence_farm",
    materials: "Cedar Split Rail, Post-and-Board, Wire",
    pros: ["Rustic character", "Defines property lines", "Affordable for large areas", "Low maintenance"],
    cons: ["Not for privacy", "Won't contain small pets"],
    tiers: { good: "$12–18/ft", better: "$20–28/ft", best: "$30–40/ft" },
  },
  {
    name: "Custom & Decorative",
    img: fenceCustom,
    slot: "fence_custom",
    materials: "Mixed Materials, Artisan Ironwork, Hardwoods",
    pros: ["Completely unique", "Adds significant property value", "Artistic expression", "Premium materials"],
    cons: ["Longer lead times", "Higher investment"],
    tiers: { good: "–", better: "–", best: "$75–150+/ft" },
  },
];

const comparison = [
  { feature: "Privacy", wood: true, vinyl: true, aluminum: false, chainlink: false, farm: false },
  { feature: "Low Maintenance", wood: false, vinyl: true, aluminum: true, chainlink: true, farm: true },
  { feature: "Pet Containment", wood: true, vinyl: true, aluminum: true, chainlink: true, farm: false },
  { feature: "Wind Resistance", wood: true, vinyl: true, aluminum: false, chainlink: false, farm: false },
  { feature: "Budget Friendly", wood: false, vinyl: false, aluminum: false, chainlink: true, farm: true },
  { feature: "Curb Appeal", wood: true, vinyl: true, aluminum: true, chainlink: false, farm: true },
];

const FenceStyles = () => (
  <Layout>
    <PageHead title={seoConfig.seo.fenceStyles.title} description={seoConfig.seo.fenceStyles.description} />

    <section className="section-padding">
      <div className="container-main text-center">
        <ScrollReveal>
          <h1>Fence Styles & Pricing</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Explore our complete range of fence types. Each section includes materials, pros & cons, and transparent pricing tiers.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {styles.map((style, i) => (
      <section key={style.name} className={`section-padding-sm ${i % 2 === 0 ? "bg-muted/40" : ""}`}>
        <div className="container-main">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <img src={getImage(null, style.slot, style.img)} alt={style.name + " fence"} className="rounded-lg shadow-md w-full aspect-[3/2] object-cover" />
              <div className="space-y-5">
                <h2>
                  <Link to={`/services/${slugify(style.name)}`} className="hover:text-primary transition-colors">
                    {style.name}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Materials:</span> {style.materials}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Advantages</h4>
                    <ul className="space-y-1.5">
                      {style.pros.map(p => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-destructive mb-2">Considerations</h4>
                    <ul className="space-y-1.5">
                      {style.cons.map(c => (
                        <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-card rounded-lg border p-4">
                  <h4 className="text-sm font-semibold mb-3">Pricing Tiers (per linear foot, installed)</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {(["good", "better", "best"] as const).map(tier => (
                      <div key={tier} className={`text-center p-3 rounded-md ${tier === "best" ? "bg-primary/5 border border-primary/20" : "bg-muted/50"}`}>
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground font-medium">{tier}</span>
                        <span className="block text-lg font-bold mt-1">{style.tiers[tier]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    ))}

    {/* Comparison Table */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h2 className="text-center mb-8">Which Fence Is Right for You?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-3 font-semibold">Wood</th>
                  <th className="text-center py-3 px-3 font-semibold">Vinyl</th>
                  <th className="text-center py-3 px-3 font-semibold">Aluminum</th>
                  <th className="text-center py-3 px-3 font-semibold">Chain Link</th>
                  <th className="text-center py-3 px-3 font-semibold">Farm</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(row => (
                  <tr key={row.feature} className="border-b last:border-0">
                    <td className="py-3 pr-4 font-medium">{row.feature}</td>
                    {(["wood", "vinyl", "aluminum", "chainlink", "farm"] as const).map(col => (
                      <td key={col} className="text-center py-3 px-3">
                        {row[col] ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/contact">Not Sure? Get a Free Consultation</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default FenceStyles;
