'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Mic,
  Coffee,
  Rocket,
  Globe,
  ChevronRight
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function EventsPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubmitting(true);
    setMessage(null);
    try {
      const response = await fetch('http://localhost:8080/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Successfully subscribed!' });
        setNewsletterEmail('');
        setTimeout(() => setMessage(null), 5000);
      } else {
        setMessage({ type: 'error', text: 'Failed to subscribe. Please try again.' });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage({ type: 'error', text: 'Failed to subscribe. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  const upcomingEvents = [
    {
      id: 1,
      title: 'November Event - To Be Announced',
      date: 'November 2025',
      time: 'TBD',
      location: 'Zagreb',
      type: 'Event',
      description: 'Stay tuned for our next major event bringing together French and Croatian tech communities',
      attendees: 'TBD',
      icon: Calendar
    }
  ];

  const pastEvents = [
    {
      title: 'Official Launch Event at French Embassy',
      date: 'October 1, 2025',
      attendees: '50+',
      highlights: 'Inaugural event with French Ambassador H.E. Fabien Fieschi and key stakeholders from both ecosystems',
      images: 1
    }
  ];

  const eventCategories = [
    {
      icon: Coffee,
      title: 'Meetups',
      description: 'Casual networking events',
      frequency: 'Coming Soon'
    },
    {
      icon: Mic,
      title: 'Speaker Series',
      description: 'Learn from successful founders',
      frequency: 'Planned'
    },
    {
      icon: Rocket,
      title: 'Workshops',
      description: 'Market entry & skills',
      frequency: 'In Development'
    },
    {
      icon: Globe,
      title: 'Delegations',
      description: 'Cross-border visits',
      frequency: '2026'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10">
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
              <span className="text-accent-dark font-medium text-sm md:text-base">📅 Building Community</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Events That{' '}
              <span className="text-primary">Connect</span> and{' '}
              <span className="text-secondary">Inspire</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Join us as we create meaningful connections between French and Croatian tech ecosystems
              through carefully curated events and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="container mx-auto px-4 mb-16">
        <div
          
          
          
          
        >
          <h2 className="text-3xl font-bold text-center mb-8">What's Coming</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((category, index) => (
              <div
                key={index}
                
                
                
                
              >
                <Card hover className="text-center h-full">
                  <category.icon className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {category.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                    {category.frequency}
                  </span>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-navy-950 py-20 mt-16">
        <div className="container mx-auto px-4">
          <div




          >
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Upcoming Events</h2>
            <div className="flex justify-center">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="max-w-md"



                >
                  <Card hover className="h-full flex flex-col bg-navy-900 border-navy-700">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-accent/30 rounded-full text-xs font-medium text-accent-light">
                          {event.type}
                        </span>
                        <event.icon className="text-primary-300" size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                      <p className="text-navy-200 mb-4">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-navy-300">
                        <Calendar className="mr-2" size={16} />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-navy-300">
                        <Clock className="mr-2" size={16} />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-navy-300">
                        <MapPin className="mr-2" size={16} />
                        {event.location}
                      </div>
                      {event.attendees !== 'TBD' && (
                        <div className="flex items-center text-sm text-navy-300">
                          <Users className="mr-2" size={16} />
                          Expected: {event.attendees} attendees
                        </div>
                      )}
                    </div>

                    <div className="mt-auto">
                      <Button variant="primary" size="sm" className="w-full">
                        Stay Updated
                        <ChevronRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="container mx-auto px-4 py-20 mt-24 pt-8">
        <div
          
          
          
          
        >
          <h2 className="text-3xl font-bold text-center mb-8">Past Events</h2>
          <div className="max-w-4xl mx-auto">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                
                
                
                
              >
                <Card className="mb-6">
                  <div className="md:flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {event.highlights}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="mr-1" size={14} />
                          {event.date}
                        </span>
                        <span className="flex items-center">
                          <Users className="mr-1" size={14} />
                          {event.attendees} attendees
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link href="/events/embassy-launch">
                        <Button variant="ghost" size="sm">
                          Read More
                          <ChevronRight className="ml-1" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="bg-navy-950 py-20 mt-16">
        <div className="container mx-auto px-4">
          <div




            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Want to Partner?</h2>
            <p className="text-lg text-navy-200 mb-8">
              We're always looking for venues, speakers, and partners to create meaningful events.
              Let's collaborate to bring the French and Croatian tech communities together.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us About Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy-950 py-20 mt-16">
        <div className="container mx-auto px-4">
        <div




          className="bg-navy-900 border border-navy-700 rounded-2xl shadow-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Never Miss an Event</h3>
          <p className="text-navy-200 mb-6">
            Get notified about upcoming events, workshops, and networking opportunities.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 border border-navy-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-navy-800 text-white placeholder-navy-400"
              />
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            {message && (
              <p className={`text-sm mt-3 text-center ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {message.text}
              </p>
            )}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}