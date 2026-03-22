import { useParams, Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHead from "@/components/PageHead";
import { seoConfig, slugify } from "@/lib/config";

// Generate realistic content per service based on name + industry
const serviceContent: Record<string, {
  paragraphs: string[];
  included: string[];
}> = {
  "wood-privacy-fences": {
    paragraphs: [
      `A wood privacy fence is one of the most popular choices for homeowners in ${seoConfig.address.city} and the surrounding area. Whether you're looking for seclusion in your backyard, a safe enclosure for children and pets, or simply a way to define your property line, a well-built wood fence delivers on all fronts.`,
      `At ${seoConfig.businessName}, we use premium Western Red Cedar and pressure-treated pine sourced from certified mills. Every board is hand-selected to minimize knots and imperfections. We set posts in concrete below the frost line — critical for ${seoConfig.address.state} winters — and use commercial-grade stainless steel fasteners that won't rust or stain your fence over time.`,
      `We offer a range of styles including dog-ear, flat-top, board-on-board, shadow box, and lattice-top designs. Heights range from 4 to 8 feet. Every wood privacy fence we install comes with our lifetime post warranty and a 10-year workmanship guarantee.`,
    ],
    included: [
      "Free on-site property measurement",
      "Custom height and style selection",
      "Utility line marking coordination",
      "Concrete-set posts below frost line",
      "Premium cedar or treated pine boards",
      "Stainless steel fasteners throughout",
      "HOA approval assistance",
      "Complete jobsite cleanup",
      "Lifetime post warranty",
    ],
  },
  "vinyl-fences": {
    paragraphs: [
      `Vinyl fencing has become the go-to choice for ${seoConfig.address.city} homeowners who want a beautiful fence without the ongoing maintenance. Unlike wood, vinyl won't rot, warp, crack, or need repainting — ever. It's the true "set it and forget it" fencing solution.`,
      `${seoConfig.businessName} installs only commercial-grade, UV-stabilized vinyl fencing that resists yellowing and fading even after years of harsh ${seoConfig.address.state} sun and snow. Our vinyl products carry a 25-year color warranty from the manufacturer, and we back every installation with our own 10-year labor guarantee.`,
      `Choose from privacy, semi-privacy, picket, and ranch-rail styles in white, tan, clay, and woodgrain finishes. We also offer matching vinyl gates, post caps, and lattice toppers to complete your look.`,
    ],
    included: [
      "Free property assessment and measurement",
      "Style and color consultation",
      "Permit acquisition where required",
      "Steel-reinforced posts for wind resistance",
      "Commercial-grade UV-stabilized panels",
      "Self-closing gate hardware options",
      "Debris removal and site cleanup",
      "25-year manufacturer color warranty",
      "10-year labor guarantee",
    ],
  },
  "aluminum-iron": {
    paragraphs: [
      `Aluminum and wrought iron fences add a timeless elegance to any property in ${seoConfig.address.city}. Whether you need a pool enclosure that meets local safety codes, a decorative border for your front yard, or a stately perimeter around a commercial property, ornamental metal fencing is the premium choice.`,
      `${seoConfig.businessName} installs powder-coated aluminum fencing that never rusts and requires virtually zero maintenance. For properties that demand the ultimate in durability and prestige, we also work with traditional wrought iron — hand-welded and finished with multi-stage rust protection.`,
      `All of our metal fence installations are engineered to meet or exceed ${seoConfig.address.state} building codes, including pool safety requirements. We offer a variety of picket styles, heights, and colors, plus matching gates with self-closing and self-latching hardware.`,
    ],
    included: [
      "On-site consultation and measurement",
      "Style selection with sample viewing",
      "Building permit coordination",
      "Powder-coated aluminum or wrought iron",
      "Concrete-set posts for maximum stability",
      "Code-compliant pool fencing options",
      "Self-closing, self-latching gates",
      "Full cleanup and haul-away",
      "Lifetime rust-through warranty (aluminum)",
    ],
  },
  "chain-link": {
    paragraphs: [
      `Chain link fencing remains the most cost-effective way to secure a property in ${seoConfig.address.city} and the surrounding metro area. It's the smart choice for large yards, dog runs, sports courts, and commercial or industrial perimeters where security and durability matter more than privacy.`,
      `${seoConfig.businessName} installs galvanized and vinyl-coated chain link in heights from 3 to 12 feet. Vinyl coating is available in black, green, and brown — blending naturally with landscaping while adding an extra layer of corrosion resistance.`,
      `For added privacy, we offer privacy slats in matching colors that weave through the chain link mesh. We also install barbed wire and razor wire extensions for commercial and industrial applications. Every chain link fence we build is tensioned to professional specifications for a clean, taut appearance.`,
    ],
    included: [
      "Free estimate with property walkthrough",
      "Height and gauge selection",
      "Terminal and line post installation",
      "Top rail and tension wire",
      "Galvanized or vinyl-coated mesh",
      "Walk and drive gate options",
      "Privacy slat installation available",
      "Complete site cleanup",
      "5-year installation warranty",
    ],
  },
  "farm-ranch": {
    paragraphs: [
      `Farm and ranch fencing is essential for property owners across ${seoConfig.serviceArea} who need to define acreage, contain livestock, or add rustic character to rural and suburban properties. From classic split rail to functional post-and-board, ${seoConfig.businessName} builds agricultural fencing that stands up to the elements and the animals.`,
      `We work with premium cedar split rail, pressure-treated post-and-board, and high-tensile wire systems. Our team understands the unique demands of ${seoConfig.address.state} agricultural fencing — from frost-heave-resistant post setting to proper bracing for corner and gate posts.`,
      `Whether you're fencing 5 acres or 500, we have the equipment and crew to handle the job efficiently. We also install horse-safe no-climb wire, electric fence systems, and combination fences that balance aesthetics with function.`,
    ],
    included: [
      "Free acreage assessment",
      "Material recommendation for your livestock",
      "Corner and gate post bracing",
      "Pressure-treated or cedar posts",
      "Split rail, board, or wire options",
      "Horse-safe and livestock-rated materials",
      "Gate installation and hardware",
      "Pasture and property line fencing",
      "3-year installation warranty",
    ],
  },
  "custom-decorative": {
    paragraphs: [
      `When off-the-shelf fence styles won't do, ${seoConfig.businessName} designs and builds custom fencing that's truly one-of-a-kind. From hand-crafted arbor gates to mixed-material privacy walls, our custom work transforms a functional boundary into an architectural feature.`,
      `Our founder, ${seoConfig.team[0]?.name || "our lead craftsman"}, brings ${seoConfig.team[0]?.years || "decades of experience"} to every custom project. We collaborate with you on design, source specialty materials, and fabricate components in our workshop before precise on-site installation.`,
      `Popular custom projects include horizontal slat fences with metal frames, Japanese-inspired garden screens, modern cable rail systems, living fence combinations with built-in planters, and estate-style entries with automated gates. If you can envision it, we can build it.`,
    ],
    included: [
      "Design consultation and sketching",
      "3D rendering for complex projects",
      "Specialty material sourcing",
      "In-shop fabrication of custom components",
      "On-site precision installation",
      "Automated gate systems available",
      "Staining and finishing options",
      "Full project management",
      "Custom warranty terms",
    ],
  },
};

function getServiceContent(slug: string) {
  if (serviceContent[slug]) return serviceContent[slug];
  // Fallback for any service not explicitly mapped
  return {
    paragraphs: [
      `${seoConfig.businessName} provides professional service throughout ${seoConfig.serviceArea}. Our experienced team delivers quality results on every project, backed by our commitment to craftsmanship and customer satisfaction.`,
      `With ${seoConfig.stats.yearsExperience} years of experience and ${seoConfig.stats.fencesInstalled} completed projects, we bring the expertise and attention to detail that your property deserves. Contact us today for a free, no-obligation estimate.`,
    ],
    included: [
      "Free on-site consultation",
      "Detailed written estimate",
      "Professional installation",
      "Quality materials",
      "Complete site cleanup",
      "Warranty coverage",
    ],
  };
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const allServices = seoConfig.services;
  const currentService = allServices.find((s) => slugify(s) === slug);

  if (!currentService) {
    return (
      <Layout>
        <PageHead title="Service Not Found" description="" />
        <div className="container-main section-padding text-center">
          <h1>Service Not Found</h1>
          <p className="text-muted-foreground mt-4">The service you're looking for doesn't exist.</p>
          <Button asChild className="mt-6">
            <Link to="/fence-styles">View All Fence Styles</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const content = getServiceContent(slug!);
  const relatedServices = allServices.filter((s) => s !== currentService).slice(0, 4);
  const pageTitle = `${currentService} in ${seoConfig.address.city}, ${seoConfig.address.state} | ${seoConfig.businessName}`;
  const pageDesc = `Professional ${currentService.toLowerCase()} installation and repair in ${seoConfig.address.city}, ${seoConfig.address.state}. Free estimates. Licensed & insured. Call ${seoConfig.phone}.`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: currentService,
    provider: {
      "@type": "LocalBusiness",
      name: seoConfig.businessName,
      telephone: seoConfig.phone,
    },
    areaServed: seoConfig.serviceArea,
  };

  return (
    <Layout>
      <PageHead title={pageTitle} description={pageDesc} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container-main px-4 md:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/fence-styles" className="hover:text-foreground transition-colors">Fence Styles</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">{currentService}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1>{currentService}</h1>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
                Professional {currentService.toLowerCase()} installation and repair serving {seoConfig.serviceArea}. Licensed, insured, and backed by our industry-leading warranty.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get a Free Estimate
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${seoConfig.phoneRaw}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    {seoConfig.phone}
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="section-padding-sm bg-muted/40">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Content */}
            <div className="lg:col-span-2 space-y-10">
              <ScrollReveal>
                <div className="space-y-5">
                  {content.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* What's Included */}
              <ScrollReveal delay={100}>
                <div className="bg-card rounded-lg border p-6 md:p-8">
                  <h2 className="text-xl font-semibold mb-5">What's Included</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {content.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* NAP */}
              <ScrollReveal delay={150}>
                <div className="bg-card rounded-lg border p-6 space-y-4">
                  <h3 className="font-semibold text-lg">{seoConfig.businessName}</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <a href={`tel:${seoConfig.phoneRaw}`} className="flex items-center gap-2 hover:text-foreground transition-colors font-medium">
                      <Phone className="w-4 h-4 text-primary" />
                      {seoConfig.phone}
                    </a>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{seoConfig.address.full}</span>
                    </div>
                    <p className="text-xs pt-1 border-t">
                      <span className="font-medium text-foreground">Service Area:</span> {seoConfig.serviceArea}
                    </p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Request a Free Estimate</Link>
                  </Button>
                </div>
              </ScrollReveal>

              {/* Related Services */}
              <ScrollReveal delay={200}>
                <div className="bg-card rounded-lg border p-6">
                  <h3 className="font-semibold text-lg mb-4">Other Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s}>
                        <Link
                          to={`/services/${slugify(s)}`}
                          className="flex items-center justify-between py-2 px-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {s}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section section-padding">
        <div className="container-main text-center space-y-6">
          <ScrollReveal>
            <h2>Ready to Get Started?</h2>
            <p className="text-dark-section-foreground/70 max-w-xl mx-auto mt-3">
              Contact us today for a free, no-obligation estimate on your {currentService.toLowerCase()} project.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/contact">Request Your Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-dark-section-foreground/20 text-dark-section-foreground hover:bg-dark-section-foreground/10" asChild>
                <a href={`tel:${seoConfig.phoneRaw}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {seoConfig.phone}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
