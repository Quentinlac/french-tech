'use client';

import React from 'react';
import {
  Rocket,
  Users,
  Globe,
  TrendingUp,
  Briefcase,
  MapPin,
  Lightbulb,
  Handshake
} from 'lucide-react';
import Card from '@/components/ui/Card';

const WhatWeDoSection = () => {
  const forCroatianStartups = [
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Access French Markets",
      description: "Navigate entry into one of Europe's largest tech ecosystems"
    },
    {
      icon: <TrendingUp className="text-primary" size={24} />,
      title: "Connect with Investors",
      description: "Meet French VCs and investment funds actively seeking opportunities"
    },
    {
      icon: <Lightbulb className="text-primary" size={24} />,
      title: "Learn from Success",
      description: "Gain insights from 45 French unicorns and their journeys"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Join Missions",
      description: "Participate in organized trips to French tech hubs"
    }
  ];

  const forFrenchCompanies = [
    {
      icon: <Rocket className="text-secondary" size={24} />,
      title: "Discover Croatian Tech",
      description: "Explore one of Europe's fastest-growing tech scenes"
    },
    {
      icon: <Users className="text-secondary" size={24} />,
      title: "Find Talent",
      description: "Access 70,000 tech professionals with 16.2% annual growth"
    },
    {
      icon: <Handshake className="text-secondary" size={24} />,
      title: "Strategic Partnerships",
      description: "Connect with companies like Rimac, Infobip, and emerging startups"
    },
    {
      icon: <Briefcase className="text-secondary" size={24} />,
      title: "Regional Gateway",
      description: "Use Croatia as your entry point to Southeast Europe"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One Conversation Can <span className="text-primary">Change Everything</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've seen it happen. A coffee at the right event. An introduction at a meetup.
            A connection that transforms a startup's trajectory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* For Croatian Startups */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                For <span className="text-primary">Croatian</span> Startups
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your gateway to the French tech ecosystem
              </p>
            </div>
            <div className="space-y-4">
              {forCroatianStartups.map((item, index) => (
                <Card key={index} className="p-4" hover>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
              ))}
            </div>
          </div>

          {/* For French Companies */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                For <span className="text-secondary">French</span> Companies
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover opportunities in Croatia and the Balkans
              </p>
            </div>
            <div className="space-y-4">
              {forFrenchCompanies.map((item, index) => (
                <Card key={index} className="p-4" hover>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-secondary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;