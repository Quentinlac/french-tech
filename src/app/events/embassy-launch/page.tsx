'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, ArrowLeft } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function EmbassyLaunchPage() {
  const images = [
    '/embassy-launch-01.jpeg',
    '/embassy-launch-02.jpeg',
    '/embassy-launch-03.jpeg',
    '/embassy-launch-04.jpeg',
    '/embassy-launch-05.jpeg',
    '/embassy-launch-06.jpeg',
    '/embassy-launch-07.jpeg',
    '/embassy-launch-08.jpeg',
    '/embassy-launch-09.jpeg',
    '/embassy-launch-10.jpeg',
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Link href="/events">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2" size={16} />
            Back to Events
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Official Launch Event at French Embassy
          </h1>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <Calendar className="mr-2" size={18} />
              October 1, 2025
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={18} />
              French Embassy, Zagreb
            </div>
            <div className="flex items-center">
              <Users className="mr-2" size={18} />
              50+ Attendees
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              On October 1, 2025, French Innovation Club Croatia officially launched with an inaugural event
              hosted at the French Embassy in Zagreb. The event brought together French Ambassador
              H.E. Fabien Fieschi and key stakeholders from both the French and Croatian tech ecosystems.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
          <h2>A Historic Moment</h2>
          <p>
            The launch event marked the beginning of a new chapter in French-Croatian tech collaboration.
            With representatives from leading startups, investors, government officials, and innovation
            agencies, the evening set the stage for meaningful connections and future partnerships.
          </p>

          <h2>Building Bridges</h2>
          <p>
            The French Innovation Club Croatia was founded with a clear mission: to create authentic
            connections between two thriving tech ecosystems. With France's 31 unicorns and Croatia's
            rapidly growing tech scene, the potential for collaboration is immense.
          </p>

          <p>
            Throughout the evening, attendees engaged in discussions about market entry strategies,
            investment opportunities, and the unique advantages each ecosystem offers. The energy in
            the room reflected the excitement around what this community can achieve together.
          </p>
        </div>

        {/* Photo Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Event Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`Embassy Launch Event ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Closing */}
        <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
          <h2>What's Next</h2>
          <p>
            This launch event was just the beginning. French Innovation Club Croatia is committed to
            organizing regular meetups, workshops, and networking events to foster collaboration between
            the French and Croatian tech communities.
          </p>
          <p>
            Stay tuned for our next event in November 2025, and join our community to be part of this
            growing movement.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Don't miss future events and opportunities to connect with the French and Croatian tech ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community">
                <Button variant="primary" size="lg">
                  Join Now
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" size="lg">
                  View All Events
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
}
