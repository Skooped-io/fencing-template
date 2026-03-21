import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="dark-section">
    <div className="container-main section-padding-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">PF</span>
            </div>
            <span className="font-heading font-bold text-lg">Precision Fence Co.</span>
          </div>
          <p className="text-sm text-dark-section-foreground/70 leading-relaxed">
            Quality fence installation and repair serving the greater metro area. Licensed, insured, and committed to craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Services</h4>
          <ul className="space-y-2 text-sm text-dark-section-foreground/70">
            <li><Link to="/fence-styles" className="hover:text-dark-section-foreground transition-colors">Wood Privacy Fences</Link></li>
            <li><Link to="/fence-styles" className="hover:text-dark-section-foreground transition-colors">Vinyl Fences</Link></li>
            <li><Link to="/fence-styles" className="hover:text-dark-section-foreground transition-colors">Aluminum & Iron</Link></li>
            <li><Link to="/fence-styles" className="hover:text-dark-section-foreground transition-colors">Chain Link</Link></li>
            <li><Link to="/fence-styles" className="hover:text-dark-section-foreground transition-colors">Farm & Ranch</Link></li>
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
              <a href="tel:5551234567" className="hover:text-dark-section-foreground transition-colors">(555) 123-4567</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@precisionfence.com" className="hover:text-dark-section-foreground transition-colors">info@precisionfence.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>Serving the greater metro area & surrounding counties</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark-section-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dark-section-foreground/50">
        <p>&copy; {new Date().getFullYear()} Precision Fence Co. All rights reserved.</p>
        <p>Licensed & Insured | Lic #FEN-2024-1847</p>
      </div>
    </div>
  </footer>
);

export default Footer;
