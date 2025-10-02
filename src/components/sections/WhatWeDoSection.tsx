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

const WhatWeDoSection = () => {
  const forCroatianStartups = [
    {
      icon: Globe,
      title: "Access French Markets",
      description: "Navigate entry into one of Europe's largest tech ecosystems"
    },
    {
      icon: TrendingUp,
      title: "Connect with Investors",
      description: "Meet French VCs and investment funds actively seeking opportunities"
    },
    {
      icon: Lightbulb,
      title: "Learn from Success",
      description: "Gain insights from 45 French unicorns and their journeys"
    },
    {
      icon: MapPin,
      title: "Join Missions",
      description: "Participate in organized trips to French tech hubs"
    }
  ];

  const forFrenchCompanies = [
    {
      icon: Rocket,
      title: "Discover Croatian Tech",
      description: "Explore one of Europe's fastest-growing tech scenes"
    },
    {
      icon: Users,
      title: "Find Talent",
      description: "Access 70,000 tech professionals with 16.2% annual growth"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Connect with companies like Rimac, Infobip, and emerging startups"
    },
    {
      icon: Briefcase,
      title: "Regional Gateway",
      description: "Use Croatia as your entry point to Southeast Europe"
    }
  ];

  return (
    <section className="bg-navy-950 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            One Conversation Can <span className="text-primary-300">Change Everything</span>
          </h2>
          <p className="text-xl text-navy-200 max-w-3xl mx-auto">
            We've seen it happen. A coffee at the right event. An introduction at a meetup.
            A connection that transforms a startup's trajectory.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* For Croatian Startups */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2 text-white">
                For <span className="text-primary-300">Croatian</span> Startups
              </h3>
              <p className="text-navy-200">
                Your gateway to the French tech ecosystem
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {forCroatianStartups.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col items-start space-y-3">
                    <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                      <item.icon className="text-primary-300" size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                      <p className="text-navy-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For French Companies */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-secondary/20">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2 text-white">
                For <span className="text-secondary">French</span> Companies
              </h3>
              <p className="text-navy-200">
                Discover opportunities in Croatia and the Balkans
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {forFrenchCompanies.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col items-start space-y-3">
                    <div className="p-3 bg-secondary/20 rounded-xl group-hover:bg-secondary/30 transition-colors">
                      <item.icon className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                      <p className="text-navy-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
