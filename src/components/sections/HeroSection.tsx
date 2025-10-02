'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10">
      {/* Static background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-6">
            <span className="text-accent-dark font-medium">🚀 Launching in Zagreb</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Where{' '}
            <span className="text-primary">French</span> and{' '}
            <span className="text-secondary">Croatian</span>{' '}
            Innovation Meet
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Building connections between two thriving tech ecosystems through community, events, and real opportunities.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">31</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">French Unicorns</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Croatian Unicorns</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-accent-dark">$5B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Croatian VC</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">€8B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">French VC 2024</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community">
              <Button variant="primary" size="lg" className="group">
                <Users className="mr-2" size={20} />
                Join Our Community
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="outline" size="lg">
                <Calendar className="mr-2" size={20} />
                Next Event: November 2025
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;