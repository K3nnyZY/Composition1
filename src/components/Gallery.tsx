import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryProps {
  language: 'en' | 'es';
}

export function Gallery({ language }: GalleryProps) {
  const content = {
    en: {
      title: 'Gallery',
      subtitle: 'Moments from our events and activities',
    },
    es: {
      title: 'Galería',
      subtitle: 'Momentos de nuestros eventos y actividades',
    },
  };

  const t = content[language];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1759091161289-017ad3c7e836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2FuJTIwY3VsdHVyYWwlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjIyNDIyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Cultural celebration event',
    },
    {
      url: 'https://images.unsplash.com/photo-1644072980122-22f4365d4519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyMjM2NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Colorful cultural festival',
    },
    {
      url: 'https://images.unsplash.com/photo-1758270704763-22072a90d3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bml0eSUyMGdyb3VwfGVufDF8fHx8MTc2MjE4NDkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Student community gathering',
    },
    {
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWVldGluZyUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzYyMjQyMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Student meeting and discussion',
    },
    {
      url: 'https://images.unsplash.com/photo-1759301247127-1a302f0dd82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MjIzMjQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Community event celebration',
    },
    {
      url: 'https://images.unsplash.com/photo-1717011969223-0217a302ec6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGRhbmNlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzYyMTgxNDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Cultural dance performance',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
