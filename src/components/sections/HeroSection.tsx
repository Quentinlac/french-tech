'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import CountUp from '@/components/ui/CountUp';
import Link from 'next/link';
import { ArrowRight, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,85,164,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,85,164,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 bg-accent/20 rounded-full mb-8 hover:bg-accent/30 transition-colors duration-300">
            <span className="text-accent-dark font-medium text-sm md:text-base">🚀 Launching in Zagreb</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Where{' '}
            <span className="text-primary">French</span> and{' '}
            <span className="text-secondary">Croatian</span>{' '}
            Innovation Meet
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Building connections between two thriving tech ecosystems through community, events, and real opportunities.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountUp end={31} duration={2000} />
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">French Unicorns</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-secondary-300 dark:hover:border-secondary-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                <CountUp end={2} duration={1500} />
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Croatian Unicorns</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-accent-dark mb-2">
                <CountUp end={5} suffix="B" prefix="$" duration={2200} />
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Croatian VC</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountUp end={8} suffix="B" prefix="€" duration={2500} />
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">French VC 2024</div>
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