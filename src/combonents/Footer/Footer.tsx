import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            © 2025 Bazooka. All Rights Reserved
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-primary transition-colors">
              Usage conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms and conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Jobs applications
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Contact us
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Bazooka franchise
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
