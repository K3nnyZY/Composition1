import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      about: 'About',
      events: 'Events',
      gallery: 'Gallery',
      join: 'Join Us',
      contact: 'Contact',
    },
    es: {
      about: 'Acerca de',
      events: 'Eventos',
      gallery: 'Galería',
      join: 'Únete',
      contact: 'Contacto',
    },
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-blue-600 cursor-pointer" onClick={() => scrollToSection('hero')}>
              LASA
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.about}
            </button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.events}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.gallery}
            </button>
            <button onClick={() => scrollToSection('join')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.join}
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700">
              {t.contact}
            </Button>
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'es' : 'en')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'es' : 'en')}
              className="text-gray-700"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 text-left">
                {t.about}
              </button>
              <button onClick={() => scrollToSection('events')} className="text-gray-700 text-left">
                {t.events}
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 text-left">
                {t.gallery}
              </button>
              <button onClick={() => scrollToSection('join')} className="text-gray-700 text-left">
                {t.join}
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 w-full">
                {t.contact}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
