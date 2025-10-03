'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, ArrowLeft, Share2, Copy, Check, Linkedin } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Lightbox from '@/components/ui/Lightbox';

export default function EmbassyLaunchPage() {
  const images = [
    { src: '/embassy-launch-01.jpeg', alt: 'Embassy Launch Event 1' },
    { src: '/embassy-launch-02.jpeg', alt: 'Embassy Launch Event 2' },
    { src: '/embassy-launch-03.jpeg', alt: 'Embassy Launch Event 3' },
    { src: '/embassy-launch-04.jpeg', alt: 'Embassy Launch Event 4' },
    { src: '/embassy-launch-05.jpeg', alt: 'Embassy Launch Event 5' },
    { src: '/embassy-launch-06.jpeg', alt: 'Embassy Launch Event 6' },
    { src: '/embassy-launch-07.jpeg', alt: 'Embassy Launch Event 7' },
    { src: '/embassy-launch-08.jpeg', alt: 'Embassy Launch Event 8' },
    { src: '/embassy-launch-09.jpeg', alt: 'Embassy Launch Event 9' },
    { src: '/embassy-launch-10.jpeg', alt: 'Embassy Launch Event 10' },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [copiedTemplate, setCopiedTemplate] = useState<number | null>(null);

  const linkedinTemplates: Array<{
    title: string;
    content: string;
    image?: string;
  }> = [
    {
      title: 'Personal Takeaway',
      content: `I attended the French Innovation Club Croatia launch this week at the French Embassy, and one thing stuck with me:
Croatia's tech ecosystem is booming, and the world is finally paying attention.
It was energizing to be in a room full of founders, investors, and ecosystem builders from both France and Croatia. Great initiative by @Quentin Lacointa and @Guillaume Rabhi to create this bridge.
Looking forward to what comes next.
#FICCroatia #CroatianTech`,
      image: '/embassy-launch-02.jpeg'
    },
    {
      title: '"I Was in the Room"',
      content: `This week at the French Embassy for the French Innovation Club Croatia launch.
The room was packed with people building the future of Croatian tech—founders from Rimac, Infobip, investors, accelerators, and legal minds navigating it all.
What impressed me most: France is serious about connecting with our ecosystem. @Quentin Lacointa and @Guillaume Rabhi aren't just talking about it—they're building the infrastructure to make it happen.
Excited to be part of this.
#FICCroatia #CroatianTech`,
      image: '/embassy-launch-05.jpeg'
    },
    {
      title: 'Why I Showed Up',
      content: `I showed up this week to the French Innovation Club Croatia launch because I believe Croatian tech deserves more international attention.
We have world-class companies here. We have talent. We have momentum.
Seeing France formalize connections with our ecosystem through this initiative—organized by @Quentin Lacointa and @Guillaume Rabhi—feels like the right move at the right time.
Count me in for what's next.
#FICCroatia #CroatianTech`
    },
    {
      title: 'The Conversations',
      content: `Best part of this week's French Innovation Club Croatia launch? The conversations.
I met [1-2 sentence about who you met or what you discussed].
Croatia's tech scene is growing fast, and initiatives like this—bringing French and Croatian ecosystems together—create the kinds of connections that actually lead somewhere.
Thanks @Quentin Lacointa and @Guillaume Rabhi for organizing.
#FICCroatia #StartupCommunity`,
      image: '/embassy-launch-03.jpeg'
    },
    {
      title: 'Personal + Ecosystem Observation',
      content: `Attended the French Innovation Club Croatia launch this week.
Here's what I'm seeing: More international ecosystems are recognizing that Croatia isn't just "emerging"—we're already here. Rimac, Infobip, Orca aren't flukes. They're proof of what's possible.
France gets it. That's why @Quentin Lacointa and @Guillaume Rabhi launched this initiative to formally connect our ecosystems through events and community.
Smart timing. Excited to see where this goes.
#FICCroatia #CroatianTech`
    },
    {
      title: 'First-Person Story',
      content: `I almost didn't go to the French Innovation Club Croatia launch this week.
Glad I did.
The energy in the room, the quality of people, the conversations—it reminded me why I love this ecosystem. We're building something real here in Croatia, and seeing France invest in connecting with us validates that.
Props to @Quentin Lacointa and @Guillaume Rabhi for making it happen.
See you at the next one.
#FICCroatia #CroatianTech`,
      image: '/embassy-launch-07.jpeg'
    },
    {
      title: '"What I Learned"',
      content: `What I learned at the French Innovation Club Croatia launch this week:

• Croatia's tech ecosystem is on more international radars than I realized
• There's real appetite for collaboration between French and Croatian startups
• When you put the right people in a room, things happen

Thanks @Quentin Lacointa and @Guillaume Rabhi for organizing. Looking forward to the next event.
#FICCroatia #CroatianTech`,
      image: '/embassy-launch-04.jpeg'
    },
    {
      title: 'Photo + Personal Reflection',
      content: `This week at the French Embassy for the French Innovation Club Croatia launch.
Packed room. Great energy. Real conversations about how French and Croatian tech ecosystems can work together.
This is exactly the kind of initiative our ecosystem needs right now—structured connections, real events, tangible opportunities.
Well done @Quentin Lacointa and @Guillaume Rabhi.
#FICCroatia #CroatianTech`,
      image: '/embassy-launch-01.jpeg'
    },
    {
      title: 'Short & Authentic',
      content: `I was at the French Innovation Club Croatia launch this week.
Great turnout, good people, real energy around connecting French and Croatian tech ecosystems.
If you're building something or investing in this region, keep an eye on what @Quentin Lacointa and @Guillaume Rabhi are organizing.
#FICCroatia`
    },
    {
      title: 'The "One Thing" Post',
      content: `One thing stood out to me at this week's French Innovation Club Croatia launch:
Croatia's tech scene has reached a point where other countries are building formal initiatives to connect with us—not because they're doing us a favor, but because they see opportunity.
That's a shift worth paying attention to.
Great work @Quentin Lacointa and @Guillaume Rabhi.
#FICCroatia #CroatianTech`,
      image: '/embassy-launch-06.jpeg'
    },
    {
      title: 'For People Who Are Getting Involved',
      content: `I attended the French Innovation Club Croatia launch this week at the French Embassy.
What started as curiosity about the initiative turned into "how can I help?"
Croatia's tech ecosystem is booming, and connecting it with France's creates real opportunities for everyone involved. @Quentin Lacointa and @Guillaume Rabhi are building something valuable here.
Looking forward to contributing to what comes next.
#FICCroatia #CroatianTech`,
      image: '/embassy-launch-08.jpeg'
    },
    {
      title: 'Founder Perspective',
      content: `As a founder in Croatia, this week's French Innovation Club Croatia launch hit differently.
We're often looking outward for market access, partnerships, investment. Seeing France formalize connections with our ecosystem—through actual events and community, not just words—feels like momentum we can use.
Thanks @Quentin Lacointa and @Guillaume Rabhi for creating this.
#FICCroatia #Founders`,
      image: '/embassy-launch-09.jpeg'
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTemplate(index);
      setTimeout(() => setCopiedTemplate(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getLinkedInShareUrl = (text: string) => {
    const encodedText = encodeURIComponent(text);
    return `https://www.linkedin.com/feed/?shareActive&mini=true&text=${encodedText}`;
  };

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  priority={index < 3}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    View Full Image
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />

        {/* Closing - moved before LinkedIn section */}
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
      </article>

      {/* LinkedIn Sharing Section - Full Width */}
      <section id="share" className="w-full bg-gradient-to-br from-gray-900 to-gray-800 bg-navy-950 py-16 px-4 mb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <Share2 className="inline-block mb-4 text-blue-400" size={40} />
            <h2 className="text-3xl font-bold mb-3 text-white">Share About This Event on LinkedIn!</h2>
            <p className="text-gray-300 text-lg">
              Help spread the word about French Innovation Club Croatia
            </p>
          </div>

          {/* Templates Grid - Pinterest Style */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {linkedinTemplates.map((template, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-6"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* LinkedIn Post Mock */}
                  <div className="p-6 relative">
                    {/* LinkedIn Logo */}
                    <div className="absolute top-4 right-4">
                      <Linkedin className="text-[#0A66C2]" size={24} />
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                        YN
                      </div>
                      <div className="flex-1 min-w-0 pr-8">
                        <div className="font-semibold text-gray-900">Your Name</div>
                        <div className="text-sm text-gray-600">Your Title • Your Company</div>
                        <div className="text-xs text-gray-500">Just now • 🌐</div>
                      </div>
                    </div>
                    <div className="text-gray-800 whitespace-pre-wrap text-sm leading-relaxed mb-4">
                      {template.content}
                    </div>
                    {template.image && (
                      <div className="rounded-lg overflow-hidden -mx-6 mb-4">
                        <Image
                          src={template.image}
                          alt="Event photo"
                          width={600}
                          height={400}
                          quality={75}
                          loading="lazy"
                          className="w-full h-auto object-cover"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
                    )}
                  </div>

                  {/* Template Title & Action Buttons */}
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-blue-600">{template.title}</span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={getLinkedInShareUrl(template.content)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="primary"
                          size="sm"
                          className="w-full flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182]"
                        >
                          <Linkedin size={16} />
                          Share on LinkedIn
                        </Button>
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(template.content, index)}
                        className="flex items-center gap-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600"
                      >
                        {copiedTemplate === index ? (
                          <>
                            <Check size={16} />
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-300 text-sm">
              Click "Share on LinkedIn" on any template above to open LinkedIn with pre-filled text, or use the copy button to manually paste.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <article className="container mx-auto px-4 max-w-4xl">
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
