import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';

interface JoinFormProps {
  language: 'en' | 'es';
}

export function JoinForm({ language }: JoinFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    year: '',
    major: '',
    interests: [] as string[],
    message: '',
  });

  const content = {
    en: {
      title: 'Join LASA',
      subtitle: "Become a member and be part of our vibrant community. It's free and open to all students!",
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      year: 'Year',
      major: 'Major',
      interests: 'Areas of Interest',
      message: 'Tell us about yourself (optional)',
      yearOptions: {
        placeholder: 'Select your year',
        freshman: 'Freshman',
        sophomore: 'Sophomore',
        junior: 'Junior',
        senior: 'Senior',
        graduate: 'Graduate Student',
      },
      interestOptions: [
        'Cultural Events',
        'Community Service',
        'Language Exchange',
        'Social Activities',
        'Leadership Opportunities',
        'Arts & Music',
      ],
      submit: 'Join Now',
      success: 'Welcome to LASA! We\'ll be in touch soon.',
      required: 'This field is required',
    },
    es: {
      title: 'Únete a LASA',
      subtitle: '¡Conviértete en miembro y sé parte de nuestra vibrante comunidad. Es gratis y abierto a todos los estudiantes!',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      year: 'Año',
      major: 'Carrera',
      interests: 'Áreas de Interés',
      message: 'Cuéntanos sobre ti (opcional)',
      yearOptions: {
        placeholder: 'Selecciona tu año',
        freshman: 'Primer Año',
        sophomore: 'Segundo Año',
        junior: 'Tercer Año',
        senior: 'Cuarto Año',
        graduate: 'Estudiante de Posgrado',
      },
      interestOptions: [
        'Eventos Culturales',
        'Servicio Comunitario',
        'Intercambio de Idiomas',
        'Actividades Sociales',
        'Oportunidades de Liderazgo',
        'Artes y Música',
      ],
      submit: 'Únete Ahora',
      success: '¡Bienvenido a LASA! Nos pondremos en contacto pronto.',
      required: 'Este campo es obligatorio',
    },
  };

  const t = content[language];

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.year || !formData.major) {
      toast.error(t.required);
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    toast.success(t.success);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      year: '',
      major: '',
      interests: [],
      message: '',
    });
  };

  return (
    <section id="join" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 mb-4">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">{t.firstName} *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">{t.lastName} *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">{t.email} *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="year">{t.year} *</Label>
                <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder={t.yearOptions.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freshman">{t.yearOptions.freshman}</SelectItem>
                    <SelectItem value="sophomore">{t.yearOptions.sophomore}</SelectItem>
                    <SelectItem value="junior">{t.yearOptions.junior}</SelectItem>
                    <SelectItem value="senior">{t.yearOptions.senior}</SelectItem>
                    <SelectItem value="graduate">{t.yearOptions.graduate}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="major">{t.major} *</Label>
                <Input
                  id="major"
                  value={formData.major}
                  onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label>{t.interests}</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {t.interestOptions.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={`interest-${index}`}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <label
                      htmlFor={`interest-${index}`}
                      className="text-sm cursor-pointer"
                    >
                      {interest}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="message">{t.message}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              {t.submit}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
