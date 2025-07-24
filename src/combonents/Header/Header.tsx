import { Button } from "./../../combonents/ui/Button";
import logo from "./../../assets/images/logo.png";
import hotline from "./../../assets/images/hotline.png";
import global from "./../../assets/images/coronavirus1.png";
import profile from "./../../assets/images/user.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => (window.location.href = "/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img className="logo" src={logo} alt="Bazooka Logo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-primary">
            <Link to="/">Home</Link>
          </Button>
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary"
          >
            <Link to="/menu">Menu</Link>
          </Button>
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary flex items-center space-x-2"
          >
            <Link to="/about">About Us</Link>
          </Button>
        </nav>

        {/* Navigation - Mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background md:hidden shadow-amber-200 bg-gray-700 opacity-90 rounded-lg z-50 ">
            <div className="flex flex-col p-4 space-y-2">
              <Link to="/" className="p-2 hover:text-primary">
                Home
              </Link>
              <Link to="/menu" className="p-2 hover:text-primary">
                Menu
              </Link>
              <Link to="/about" className="p-2 hover:text-primary">
                About Us
              </Link>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-primary">
            <img className="w-30 h-10" src={hotline} alt="Hotline" />
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <img src={global} alt="Global" />
            </Button>
            <Button variant="ghost" size="icon">
              <img src={profile} alt="Profile" />
            </Button>
            <span className="text-sm text-foreground">عربى</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
