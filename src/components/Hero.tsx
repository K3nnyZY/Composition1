import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  language: 'en' | 'es';
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      title: 'Latin American Student Association',
      subtitle: 'Celebrating Culture, Building Community, Creating Change',
      description: 'Join us in celebrating Latin American heritage, fostering cultural awareness, and building lasting connections.',
      cta: 'Join LASA Today',
      learn: 'Learn More',
    },
    es: {
      title: 'Asociación de Estudiantes Latinoamericanos',
      subtitle: 'Celebrando Cultura, Construyendo Comunidad, Creando Cambio',
      description: 'Únete a nosotros para celebrar el patrimonio latinoamericano, fomentar la conciencia cultural y construir conexiones duraderas.',
      cta: 'Únete a LASA Hoy',
      learn: 'Aprende Más',
    },
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759091161289-017ad3c7e836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2FuJTIwY3VsdHVyYWwlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjIyNDIyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="LASA Cultural Celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white mb-6 max-w-4xl mx-auto">
          {t.title}
        </h1>
        <p className="text-white/90 mb-4 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('join')}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            {t.cta}
          </Button>
          <Button
            onClick={() => scrollToSection('about')}
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            {t.learn}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
