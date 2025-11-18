import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { JoinForm } from './components/JoinForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Events language={language} />
      <Gallery language={language} />
      <JoinForm language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <Toaster />
    </div>
  );
}
