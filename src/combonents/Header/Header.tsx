import { ShoppingCart, User } from "lucide-react";
import { Button } from "./../../combonents/ui/Button";
import logo from "./../../assets/images/logo.png";
import hotline from "./../../assets/images/hotline.png";
import global from "./../../assets/images/coronavirus1.png";
const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <img className="logo  " src={logo} alt="Bazooka Logo" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-primary">
            Home
          </Button>
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary"
          >
            Menu
          </Button>
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
          </Button>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Hotline */}
          <div className="hidden lg:flex items-center space-x-2 text-primary">
            <img className="w-30 h-10" src={hotline} alt="Hotline" />
          </div>

          {/* Language and Profile */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <img src={global} alt="Global" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4 text-foreground" />
            </Button>
            <span className="text-sm text-foreground">عربى</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
