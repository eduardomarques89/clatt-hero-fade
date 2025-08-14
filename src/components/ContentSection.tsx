const ContentSection = () => {
  return (
    <section className="py-20 bg-clatt-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-clatt-neutral mb-6 tracking-wide">
            Uma Experiência Única
          </h2>
          <p className="text-lg text-clatt-neutral/80 leading-relaxed mb-12">
            No Hotel Clatt, cada momento é cuidadosamente planejado para superar suas expectativas. 
            Desfrute de acomodações luxuosas, experiências gastronômicas excepcionais e um 
            atendimento personalizado que torna sua estadia verdadeiramente especial.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-clatt-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-light text-clatt-neutral mb-2">Acomodações</h3>
              <p className="text-clatt-neutral/70">Quartos e suítes elegantes com todo o conforto</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-clatt-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-light text-clatt-neutral mb-2">Gastronomia</h3>
              <p className="text-clatt-neutral/70">Experiências culinárias únicas e memoráveis</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-clatt-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-light text-clatt-neutral mb-2">Serviços</h3>
              <p className="text-clatt-neutral/70">Atendimento personalizado e exclusivo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;