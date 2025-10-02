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
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div
          
          
          
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building <span className="text-primary">Community</span> Through Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join us as we create meaningful connections between French and Croatian tech ecosystems
            through carefully curated events and experiences.
          </p>
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
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div
            
            
            
            
          >
            <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  
                  
                  
                  
                >
                  <Card hover className="h-full flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent-dark">
                          {event.type}
                        </span>
                        <event.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-2" size={16} />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-2" size={16} />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="mr-2" size={16} />
                        {event.location}
                      </div>
                      {event.attendees !== 'TBD' && (
                        <div className="flex items-center text-sm text-gray-500">
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
      <section className="container mx-auto px-4 py-16">
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
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div
            
            
            
            
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Want to Partner?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
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
      <section className="container mx-auto px-4 py-16">
        <div
          
          
          
          
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Never Miss an Event</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
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
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900"
              />
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            {message && (
              <p className={`text-sm mt-3 text-center ${message.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {message.text}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}