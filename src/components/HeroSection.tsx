import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hotel-room.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 animate-fade-in">
          CLATT
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide opacity-90 mb-2 animate-fade-in">
          HOTEL & EXPERIÊNCIAS
        </p>
        <div className="w-24 h-px bg-clatt-gold mx-auto mb-8 animate-fade-in" />
        <p className="text-base md:text-lg font-light leading-relaxed opacity-80 mb-12 max-w-2xl mx-auto animate-fade-in">
          Desperte seus sentidos em uma experiência única de hospitalidade. 
          Cada detalhe foi pensado para proporcionar momentos inesquecíveis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-clatt-neutral transition-all duration-300 px-8 py-3 text-base font-light tracking-wide"
          >
            Explorar Acomodações
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-clatt-gold border-clatt-gold text-clatt-neutral hover:bg-clatt-gold/90 transition-all duration-300 px-8 py-3 text-base font-light tracking-wide"
          >
            Fazer Reserva
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;