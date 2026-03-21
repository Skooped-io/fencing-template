import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/fence-styles", label: "Fence Styles" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b">
      <div className="container-main flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">PF</span>
          </div>
          <span className="font-heading font-bold text-lg text-secondary">Precision Fence Co.</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary/5"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:5551234567" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
          <Button asChild>
            <Link to="/contact">Free Estimate</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-card px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary/5"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t mt-2">
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Free Estimate</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
