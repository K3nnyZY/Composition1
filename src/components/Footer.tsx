import { Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'es';
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      tagline: 'Celebrating Latin American culture, building community, and creating change.',
      quickLinks: 'Quick Links',
      about: 'About',
      events: 'Events',
      gallery: 'Gallery',
      join: 'Join Us',
      contact: 'Contact',
      connect: 'Connect',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      by: 'by LASA',
    },
    es: {
      tagline: 'Celebrando la cultura latinoamericana, construyendo comunidad y creando cambio.',
      quickLinks: 'Enlaces Rápidos',
      about: 'Acerca de',
      events: 'Eventos',
      gallery: 'Galería',
      join: 'Únete',
      contact: 'Contacto',
      connect: 'Conéctate',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      by: 'por LASA',
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-blue-400 mb-4">LASA</h3>
            <p className="text-gray-400 text-sm">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('events')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.events}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.gallery}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('join')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.join}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4">{t.connect}</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:lasa@university.edu"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} LASA. {t.rights}
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              {t.madeWith} <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> {t.by}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
