import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

import fenceWood from "@/assets/fence-wood.jpg";
import fenceVinyl from "@/assets/fence-vinyl.jpg";
import fenceAluminum from "@/assets/fence-aluminum.jpg";
import fenceChainlink from "@/assets/fence-chainlink.jpg";
import fenceCustom from "@/assets/fence-custom.jpg";
import fenceFarm from "@/assets/fence-farm.jpg";
import heroImg from "@/assets/hero-fence.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const filters = ["All", "Wood", "Vinyl", "Metal", "Chain Link", "Custom"] as const;

const galleryItems = [
  { img: fenceWood, type: "Wood", caption: "Horizontal cedar privacy fence — Edina" },
  { img: fenceVinyl, type: "Vinyl", caption: "White vinyl with lattice top — Minnetonka" },
  { img: fenceAluminum, type: "Metal", caption: "Ornamental aluminum — Plymouth" },
  { img: fenceChainlink, type: "Chain Link", caption: "Vinyl-coated chain link — Brooklyn Park" },
  { img: fenceCustom, type: "Custom", caption: "Custom wrought iron gate — Wayzata" },
  { img: fenceFarm, type: "Wood", caption: "Split rail ranch fence — Maple Grove" },
  { img: heroImg, type: "Wood", caption: "Cedar dog-ear privacy — Maplewood" },
  { img: project1, type: "Wood", caption: "Scalloped cedar — Roseville" },
  { img: project2, type: "Wood", caption: "Modern horizontal slat — Edina" },
  { img: project3, type: "Metal", caption: "Pool safety enclosure — Plymouth" },
];

const Gallery = () => {
  const [active, setActive] = useState<typeof filters[number]>("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter(g => g.type === active);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="text-center">Project Gallery</h1>
            <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
              Browse our recent installations. Every fence is built with precision and pride.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    active === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.caption}
                    className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-sm text-white font-medium">{item.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
