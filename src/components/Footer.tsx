import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { seoConfig } from "@/lib/config";

const Footer = () => (
  <footer className="dark-section">
    <div className="container-main section-padding-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">{seoConfig.businessNameShort}</span>
            </div>
            <span className="font-heading font-bold text-lg">{seoConfig.businessName}</span>
          </div>
          <p className="text-sm text-dark-section-foreground/70 leading-relaxed">
            Quality fence installation and repair serving the greater metro area. Licensed, insured, and committed to craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Services</h4>
          <ul className="space-y-2 text-sm text-dark-section-foreground/70">
            {seoConfig.services.map((service) => (
              <li key={service}>
                <Link to="/fence-styles" className="hover:text-dark-section-foreground transition-colors">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-dark-section-foreground/70">
            <li><Link to="/about" className="hover:text-dark-section-foreground transition-colors">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-dark-section-foreground transition-colors">Project Gallery</Link></li>
            <li><Link to="/faq" className="hover:text-dark-section-foreground transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-dark-section-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-dark-section-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href={`tel:${seoConfig.phoneRaw}`} className="hover:text-dark-section-foreground transition-colors">{seoConfig.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href={`mailto:${seoConfig.email}`} className="hover:text-dark-section-foreground transition-colors">{seoConfig.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>{seoConfig.serviceArea}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark-section-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dark-section-foreground/50">
        <p>&copy; {new Date().getFullYear()} {seoConfig.businessName} All rights reserved.</p>
        <p>Licensed & Insured | Lic #{seoConfig.licenseNumber}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
