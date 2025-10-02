import { Metadata } from 'next';
import JoinForm from '@/components/forms/JoinForm';
import { Users, Rocket, Heart, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join Community | French Innovation Club Croatia',
  description: 'Become part of French Innovation Club Croatia. Connect with founders, investors, and innovators building bridges between two thriving tech ecosystems.',
};

export default function CommunityPage() {
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
              <span className="text-accent-dark font-medium text-sm md:text-base">🤝 Join Us</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Become Part of the <span className="text-primary">Movement</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Join founders, investors, and innovators shaping the future of French-Croatian tech collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-navy-950 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-primary-300" size={24} />
              </div>
              <h3 className="font-semibold mb-1 text-white">Network</h3>
              <p className="text-sm text-navy-200">
                Connect with 100+ members
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Rocket className="text-secondary" size={24} />
              </div>
              <h3 className="font-semibold mb-1 text-white">Grow</h3>
              <p className="text-sm text-navy-200">
                Access new markets
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="text-accent-dark" size={24} />
              </div>
              <h3 className="font-semibold mb-1 text-white">Support</h3>
              <p className="text-sm text-navy-200">
                Get help when needed
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="text-primary-300" size={24} />
              </div>
              <h3 className="font-semibold mb-1 text-white">Expand</h3>
              <p className="text-sm text-navy-200">
                Go international
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="container mx-auto px-4">
        <JoinForm />
      </div>
    </div>
  );
}