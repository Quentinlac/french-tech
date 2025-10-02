'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Card from '@/components/ui/Card';
import Image from 'next/image';

const WhoWeAreSection = () => {
  const team = [
    {
      name: "Quentin Lacointa",
      role: "President & Co-Founder",
      background: [
        "CEO of Trezy",
        "Previously built one of Europe's leading tech education companies",
        "Lived the startup journey from Netherlands to Croatia"
      ],
      linkedin: "https://www.linkedin.com/in/mister-q/",
      image: "/quentin.jpeg"
    },
    {
      name: "Guillaume Rabhi",
      role: "Co-Founder",
      background: [
        "CDO at AGRIVI",
        "Deep connections in both French and Croatian tech ecosystems",
        "Passionate about building bridges between innovation hubs"
      ],
      linkedin: "https://www.linkedin.com/in/guillaume-antoine-rabhi-2191998/",
      image: "/guillaume.jpeg"
    }
  ];

  const advisors = [
    {
      name: "Sylvain Geranton",
      role: "Economic Counselor, French Embassy",
      description: "Instrumental in establishing French Innovation Club Croatia",
      image: "/sylvain.jpeg"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          
          
          
          
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Entrepreneurs who've lived the journey and believe in the power of community
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              
              
              
              
            >
              <Card className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-2 text-primary hover:text-primary-dark transition-colors"
                        >
                          <Linkedin size={16} className="mr-1" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>

                  {member.story && (
                    <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4 pl-4 border-l-4 border-primary">
                      "{member.story}"
                    </blockquote>
                  )}

                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {member.background.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div
          
          
          
          
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Our Advisors</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center p-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-semibold">{advisor.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {advisor.role}
                </p>
                {advisor.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    {advisor.description}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;