import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    'Sobre o Clatt',
    'Acomodações', 
    'Experiências',
    'Sustentabilidade',
    'Corporativo',
    'Reservas'
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-clatt-blue backdrop-blur-md shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <h1 className="text-white text-2xl md:text-3xl font-light tracking-wider">
              CLATT
              <span className="block text-xs tracking-[0.2em] opacity-80">
                HOTEL & EXPERIÊNCIAS
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-clatt-gold transition-colors duration-200 text-sm font-light tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <Search size={20} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/20">
            <div className="pt-6 space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white hover:text-clatt-gold transition-colors duration-200 text-base font-light tracking-wide py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;