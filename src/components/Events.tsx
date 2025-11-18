import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface EventsProps {
  language: 'en' | 'es';
}

export function Events({ language }: EventsProps) {
  const content = {
    en: {
      title: 'Upcoming Events',
      subtitle: 'Join us for our upcoming events and activities',
      location: 'Location',
      time: 'Time',
      learnMore: 'Learn More',
      noEvents: 'No upcoming events at the moment. Check back soon!',
      events: [
        {
          title: 'Cultural Heritage Night',
          date: 'November 15, 2025',
          time: '6:00 PM - 9:00 PM',
          location: 'Student Union Ballroom',
          description: 'Experience the vibrant cultures of Latin America through music, dance, food, and art. This is our signature event of the semester!',
          type: 'Cultural',
          color: 'bg-purple-500',
        },
        {
          title: 'Language Exchange Café',
          date: 'November 8, 2025',
          time: '3:00 PM - 5:00 PM',
          location: 'Campus Coffee House',
          description: 'Practice Spanish or Portuguese in a relaxed, friendly environment. All levels welcome!',
          type: 'Social',
          color: 'bg-blue-500',
        },
        {
          title: 'Community Service Day',
          date: 'November 22, 2025',
          time: '10:00 AM - 2:00 PM',
          location: 'Local Community Center',
          description: 'Give back to the community by volunteering at the local community center. Help with tutoring and activities.',
          type: 'Service',
          color: 'bg-green-500',
        },
        {
          title: 'Film Screening: Coco',
          date: 'November 29, 2025',
          time: '7:00 PM - 9:30 PM',
          location: 'Campus Theater',
          description: 'Join us for a screening of this beloved film celebrating Día de los Muertos. Free popcorn and discussion afterward!',
          type: 'Cultural',
          color: 'bg-orange-500',
        },
      ],
    },
    es: {
      title: 'Próximos Eventos',
      subtitle: 'Únete a nosotros para nuestros próximos eventos y actividades',
      location: 'Ubicación',
      time: 'Hora',
      learnMore: 'Más Información',
      noEvents: 'No hay eventos próximos en este momento. ¡Vuelve pronto!',
      events: [
        {
          title: 'Noche del Patrimonio Cultural',
          date: '15 de noviembre, 2025',
          time: '6:00 PM - 9:00 PM',
          location: 'Salón de Baile del Centro Estudiantil',
          description: 'Experimenta las vibrantes culturas de América Latina a través de música, danza, comida y arte. ¡Este es nuestro evento estrella del semestre!',
          type: 'Cultural',
          color: 'bg-purple-500',
        },
        {
          title: 'Café de Intercambio de Idiomas',
          date: '8 de noviembre, 2025',
          time: '3:00 PM - 5:00 PM',
          location: 'Cafetería del Campus',
          description: 'Practica español o portugués en un ambiente relajado y amigable. ¡Todos los niveles son bienvenidos!',
          type: 'Social',
          color: 'bg-blue-500',
        },
        {
          title: 'Día de Servicio Comunitario',
          date: '22 de noviembre, 2025',
          time: '10:00 AM - 2:00 PM',
          location: 'Centro Comunitario Local',
          description: 'Retribuye a la comunidad como voluntario en el centro comunitario local. Ayuda con tutoría y actividades.',
          type: 'Servicio',
          color: 'bg-green-500',
        },
        {
          title: 'Proyección de Película: Coco',
          date: '29 de noviembre, 2025',
          time: '7:00 PM - 9:30 PM',
          location: 'Teatro del Campus',
          description: '¡Únete a nosotros para una proyección de esta querida película que celebra el Día de los Muertos. Palomitas gratis y discusión después!',
          type: 'Cultural',
          color: 'bg-orange-500',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.events.map((event, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="mb-2">{event.title}</h4>
                    <Badge className={`${event.color} text-white border-0`}>{event.type}</Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 flex-1">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    {event.location}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  {t.learnMore}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
