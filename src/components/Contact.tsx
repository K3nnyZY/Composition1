import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Mail, Instagram, Facebook, Twitter, MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContactProps {
  language: 'en' | 'es';
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Have questions? We\'d love to hear from you!',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent! We\'ll get back to you soon.',
      getInTouch: 'Get In Touch',
      emailLabel: 'Email Us',
      followUs: 'Follow Us',
      location: 'Find Us',
      locationText: 'Student Organization Office, Campus Building',
    },
    es: {
      title: 'Contáctanos',
      subtitle: '¿Tienes preguntas? ¡Nos encantaría saber de ti!',
      name: 'Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Mensaje enviado! Nos pondremos en contacto pronto.',
      getInTouch: 'Ponte en Contacto',
      emailLabel: 'Envíanos un Correo',
      followUs: 'Síguenos',
      location: 'Encuéntranos',
      locationText: 'Oficina de Organizaciones Estudiantiles, Edificio del Campus',
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error(language === 'en' ? 'Please fill in all fields' : 'Por favor completa todos los campos');
      return;
    }

    console.log('Contact form submitted:', formData);
    toast.success(t.success);
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 mb-4">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{t.name} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">{t.email} *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">{t.subject} *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message">{t.message} *</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {t.send}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">{t.emailLabel}</h4>
                  <a href="mailto:lasa@university.edu" className="text-gray-600 hover:text-blue-600 text-sm">
                    lasa@university.edu
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">{t.location}</h4>
                  <p className="text-gray-600 text-sm">{t.locationText}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="mb-4">{t.followUs}</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-blue-600" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-blue-600" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
