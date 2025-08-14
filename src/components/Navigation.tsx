import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-full h-full bg-clatt-blue border-none p-0 flex flex-col justify-center items-center"
            >
              <div className="space-y-8 text-center">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-white hover:text-clatt-gold transition-colors duration-300 text-2xl font-light tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-white text-2xl md:text-3xl font-light tracking-wider text-center">
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
      </div>
    </nav>
  );
};

export default Navigation;