'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage(null);
    try {
      const response = await fetch('http://localhost:8080/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Successfully subscribed!' });
        setEmail('');
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

  return (
    <footer className="bg-navy text-white mt-20 pt-16">
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary-light">FIC</span>
              <span className="text-secondary-light ml-1">Croatia</span>
            </h3>
            <p className="text-gray-300 mb-4">
              French Innovation Club Croatia connects the French and Croatian startup ecosystems through events, community, and real opportunities for growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/french-innovation-club-croatia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@ficcroatia.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/ecosystems/croatia" className="text-gray-300 hover:text-white transition-colors">
                  Croatian Tech
                </Link>
              </li>
              <li>
                <Link href="/ecosystems/france" className="text-gray-300 hover:text-white transition-colors">
                  French Tech
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                  Join Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Zagreb, Croatia</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:contact@ficcroatia.com" className="hover:text-white transition-colors">
                  contact@ficcroatia.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="max-w-md mx-auto text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Get monthly updates on events, opportunities, and ecosystem news.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-light"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© {currentYear} French Innovation Club Croatia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;