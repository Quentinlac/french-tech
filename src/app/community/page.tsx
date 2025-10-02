import { Metadata } from 'next';
import JoinForm from '@/components/forms/JoinForm';
import { Users, Rocket, Heart, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join Community | French Innovation Club Croatia',
  description: 'Become part of French Innovation Club Croatia. Connect with founders, investors, and innovators building bridges between two thriving tech ecosystems.',
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16 pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become Part of the Movement
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join founders, investors, and innovators shaping the future of French-Croatian tech collaboration.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 mb-20 mt-8 pb-16">
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-1">Network</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Connect with 100+ members
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Rocket className="text-secondary" size={24} />
            </div>
            <h3 className="font-semibold mb-1">Grow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access new markets
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="text-accent-dark" size={24} />
            </div>
            <h3 className="font-semibold mb-1">Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get help when needed
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Globe className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-1">Expand</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Go international
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 mt-24 pt-8">
        <JoinForm />
      </div>
    </div>
  );
}