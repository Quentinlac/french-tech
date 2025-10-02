'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  role: string;
  image: string;
  companyLogo?: string;
  text: string;
  connection: string; // e.g., "1st", "2nd"
  timeAgo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Fabien Fieschi',
    title: 'Diplomat - Ambassador of France to Croatia',
    role: 'Ambassade de France en Croatie',
    image: '/fabien-fieschi.jpeg',
    companyLogo: '/france-embassy-logo.jpg',
    connection: '2nd',
    timeAgo: '7h',
    text: 'Many thanks to you Quentin Lacointa and Guillaume Rabhi for taking the lead of this project connecting 🇫🇷and🇭🇷#tech ecosystems and bringing your talent, experience and dynamism to build this community.\n\nFor a launch event you managed to gather a diverse and impressive group of entrepreneurs, investors and tech companies.\n\nDelighted to participate to the kick-off of French Innovation Club Croatia and to accompany you in this endeavour. You can count on the continuous support of Ambassade de France en Croatie!\n\nMany thanks to Sylvain Géranton too!'
  },
  {
    name: 'Matija Srbic',
    title: 'Managing director at deep-tech venture builder Nuqleus',
    role: 'Startup ecosystem coordinator at Innovation Centre Nikola Tesla',
    image: '/matija-srbic.jpeg',
    companyLogo: '/nuqleus-logo.svg',
    connection: '1st',
    timeAgo: '6h',
    text: 'Great initiative. It is very important that people like you and Guillaume Antoine Rabhi are coordinating these kinds of activities since you understand the needs and opportunities. Kudos to Ambassador Fabien Fieschi for recognising its importance 👏'
  },
  {
    name: 'Sven Harjaček',
    title: 'Team Lead at BIRD Incubator',
    role: 'BIRD Incubator',
    image: '/sven-harjacek.jpeg',
    companyLogo: '/bird-logo.png',
    connection: '1st',
    timeAgo: '6h',
    text: 'Thanks for organizing a great event Quentin Lacointa! Looking forward to see what the future holds for the French Innovation Club Croatia.'
  },
  {
    name: 'Stefan Martinić',
    title: 'Law Office Stefan Martinić',
    role: 'LL.M. at Harvard Law School; LL.M. at LSE; CIPP/E',
    image: '/stefan-martinic.jpeg',
    connection: '1st',
    timeAgo: '4h',
    text: 'Thank you very much for the invitation! After my Erasmus exchange studies at Sorbonne, and having lived in Paris and travelled across France, I fell in love with the language, the country, and its people. I am very happy to have this opportunity to maintain my connection with France, even though I am now back home working in Zagreb.'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Quote className="text-primary" size={20} />
            <span className="text-primary font-medium">Community Voices</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real feedback from our embassy launch event on LinkedIn
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",
                "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                "border border-gray-200 dark:border-gray-700"
              )}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Profile Picture */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-200 dark:ring-gray-700">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Title */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                      {testimonial.connection}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {testimonial.timeAgo}
                  </p>
                </div>

                {/* Company Logo */}
                {testimonial.companyLogo && (
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={testimonial.companyLogo}
                      alt={testimonial.role}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Comment Text */}
              <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {testimonial.text}
              </div>

              {/* LinkedIn-style bottom */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <button className="hover:text-primary transition-colors">
                  👍 Like
                </button>
                <button className="hover:text-primary transition-colors">
                  💬 Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            See more reactions on LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/company/french-innovation-club-croatia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Follow Us on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
