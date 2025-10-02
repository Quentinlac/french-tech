import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Handshake } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  category: string;
}

const partners: Partner[] = [
  // Corporates & Tech Giants
  { name: 'Rimac Automobili', logo: '/rimac-logo.svg', category: 'corporate' },
  { name: 'Infobip', logo: '/infobip-logo.svg', category: 'corporate' },
  { name: 'Microsoft', logo: '/microsoft-logo.svg', category: 'corporate' },
  { name: 'Hrvatski Telekom', logo: '/ht-logo.svg', category: 'corporate' },

  // Startups & Scale-ups
  { name: 'AGRIVI', logo: '/agrivi-logo.svg', category: 'startup' },
  { name: 'Fonoa', logo: '/fonoa-logo.svg', category: 'startup' },
  { name: 'Trezy', logo: '/trezy-logo.svg', category: 'startup' },
  { name: 'Orqa', logo: '/bird-logo.png', category: 'startup' },
  { name: 'Degordian', logo: '/degordian-logo.jpeg', category: 'startup' },

  // Ecosystem & Institutions
  { name: 'Nuqleus', logo: '/nuqleus-logo.svg', category: 'ecosystem' },
  { name: 'BIRD Incubator', logo: '/bird-logo.png', category: 'ecosystem' },
  { name: 'ICENT', logo: '/icent-logo.png', category: 'ecosystem' },
  { name: 'ZICER', logo: '/zicer-logo.svg', category: 'ecosystem' },
  { name: 'Invera', logo: '/invera-logo.png', category: 'ecosystem' },
  { name: 'French Embassy', logo: '/france-embassy-logo.jpg', category: 'institution' },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Handshake className="text-primary" size={20} />
            <span className="text-primary font-medium">Our Supporters</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Supported By Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From tech giants to innovative startups, ecosystem builders, and government institutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl",
                "hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1",
                "transition-all duration-300 border border-gray-200 dark:border-gray-700",
                "group relative overflow-hidden"
              )}
            >
              <div className="relative w-full h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to support the French Innovation Club Croatia?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
          >
            <Handshake size={20} />
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
