import { Card } from './ui/card';
import { Users, Heart, Sparkles, GraduationCap } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'es';
}

export function About({ language }: AboutProps) {
  const content = {
    en: {
      title: 'About LASA',
      mission: 'Our Mission',
      missionText: 'The Latin American Student Association (LASA) is dedicated to celebrating and promoting Latin American culture, heritage, and diversity on campus. We provide a welcoming space for students of all backgrounds to learn, connect, and grow together.',
      whatWeDo: 'What We Do',
      values: [
        {
          icon: Users,
          title: 'Community Building',
          description: 'Creating a supportive network of students who share an appreciation for Latin American culture and values.',
        },
        {
          icon: Heart,
          title: 'Cultural Celebration',
          description: 'Organizing events, festivals, and activities that showcase the rich diversity of Latin American traditions.',
        },
        {
          icon: Sparkles,
          title: 'Social Impact',
          description: 'Engaging in community service and advocacy to create positive change on campus and beyond.',
        },
        {
          icon: GraduationCap,
          title: 'Educational Programs',
          description: 'Hosting workshops, speakers, and discussions to promote cultural awareness and understanding.',
        },
      ],
    },
    es: {
      title: 'Acerca de LASA',
      mission: 'Nuestra Misión',
      missionText: 'La Asociación de Estudiantes Latinoamericanos (LASA) se dedica a celebrar y promover la cultura, herencia y diversidad latinoamericana en el campus. Proporcionamos un espacio acogedor para que estudiantes de todos los orígenes aprendan, se conecten y crezcan juntos.',
      whatWeDo: 'Lo Que Hacemos',
      values: [
        {
          icon: Users,
          title: 'Construcción de Comunidad',
          description: 'Creando una red de apoyo de estudiantes que comparten un aprecio por la cultura y valores latinoamericanos.',
        },
        {
          icon: Heart,
          title: 'Celebración Cultural',
          description: 'Organizando eventos, festivales y actividades que muestran la rica diversidad de las tradiciones latinoamericanas.',
        },
        {
          icon: Sparkles,
          title: 'Impacto Social',
          description: 'Participando en servicio comunitario y defensa para crear un cambio positivo en el campus y más allá.',
        },
        {
          icon: GraduationCap,
          title: 'Programas Educativos',
          description: 'Organizando talleres, oradores y discusiones para promover la conciencia y comprensión cultural.',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">{t.title}</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="mb-4">{t.mission}</h3>
            <p className="text-gray-600">{t.missionText}</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center mb-8">{t.whatWeDo}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
