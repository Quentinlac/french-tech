'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div
          
          
          
        >
          <Card className="max-w-md text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div
          
          
          
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Have a question? Want to partner? Looking for opportunities?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            
            
            
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {/* Email */}
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@ficcroatia.com"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      contact@ficcroatia.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* LinkedIn */}
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Linkedin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/company/french-innovation-club-croatia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      French Innovation Club Croatia
                    </a>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Zagreb, Croatia
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div
            
            
            
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="event">Event Collaboration</option>
                    <option value="membership">Membership Question</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="market-entry">Market Entry Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                    placeholder="Tell us more about how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 mt-24 pt-16">
        <div
          
          
          
          
        >
          <h2 className="text-2xl font-bold text-center mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card hover className="text-center p-6">
              <h3 className="font-bold mb-2">Join the Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Connect with founders and investors
              </p>
              <Link href="/community">
                <Button variant="outline" size="sm">
                  Join Now
                </Button>
              </Link>
            </Card>
            <Card hover className="text-center p-6">
              <h3 className="font-bold mb-2">Attend an Event</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Check out our upcoming events
              </p>
              <Link href="/events">
                <Button variant="outline" size="sm">
                  View Events
                </Button>
              </Link>
            </Card>
            <Card hover className="text-center p-6">
              <h3 className="font-bold mb-2">Partner With Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Explore collaboration opportunities
              </p>
              <a href="mailto:contact@ficcroatia.com">
                <Button variant="outline" size="sm">
                  Get in Touch
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}