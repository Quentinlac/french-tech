'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const joinFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  role: z.string().optional(),
  linkedin: z.string().url().optional().or(z.literal('')),
  phone: z.string().optional(),
  involvement: z.array(z.string()).min(1, 'Please select at least one involvement option'),
  interests: z.array(z.string()),
  message: z.string().optional(),
  newsletter: z.boolean()
});

type JoinFormData = z.infer<typeof joinFormSchema>;

const JoinForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<JoinFormData>({
    resolver: zodResolver(joinFormSchema),
    defaultValues: {
      involvement: [],
      interests: [],
      newsletter: true
    }
  });

  const onSubmit = async (data: JoinFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8080/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const involvementOptions = [
    { value: 'attend', label: 'Attend events and meetups' },
    { value: 'organize', label: 'Actively organize events' },
    { value: 'speak', label: 'Speak at events' },
    { value: 'mentor', label: 'Mentor startups' },
    { value: 'sponsor', label: 'Sponsor initiatives' },
    { value: 'connect', label: 'Connect for business opportunities' }
  ];

  const interestOptions = [
    { value: 'investors', label: 'Finding investors' },
    { value: 'market', label: 'Market expansion' },
    { value: 'partnerships', label: 'Technical partnerships' },
    { value: 'talent', label: 'Talent acquisition' },
    { value: 'knowledge', label: 'Knowledge sharing' },
    { value: 'networking', label: 'Networking' }
  ];

  if (isSuccess) {
    return (
      <Card className="max-w-2xl mx-auto text-center p-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to French Innovation Club Croatia! We'll be in touch soon with upcoming events and opportunities.
        </p>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              {...register('name')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-error-500 text-sm mt-1 flex items-center gap-1 animate-slide-down">
                <AlertCircle size={14} />
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-error-500 text-sm mt-1 flex items-center gap-1 animate-slide-down">
                <AlertCircle size={14} />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Company/Organization
            </label>
            <input
              {...register('company')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Role
            </label>
            <input
              {...register('role')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
              placeholder="Your role"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              LinkedIn Profile
            </label>
            <input
              {...register('linkedin')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
              placeholder="linkedin.com/in/yourprofile"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone (optional)
            </label>
            <input
              {...register('phone')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
              placeholder="+385 XX XXX XXXX"
            />
          </div>
        </div>

        {/* Involvement Options */}
        <div>
          <label className="block text-sm font-medium mb-2">
            How do you want to be involved? *
          </label>
          <div className="space-y-2">
            {involvementOptions.map(option => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  {...register('involvement')}
                  type="checkbox"
                  value={option.value}
                  className="w-4 h-4 text-primary rounded focus:ring-primary border-gray-300"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.involvement && (
            <p className="text-error-500 text-sm mt-1 flex items-center gap-1 animate-slide-down">
              <AlertCircle size={14} />
              {errors.involvement.message}
            </p>
          )}
        </div>

        {/* Interests */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Your Interests
          </label>
          <div className="space-y-2">
            {interestOptions.map(option => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  {...register('interests')}
                  type="checkbox"
                  value={option.value}
                  className="w-4 h-4 text-primary rounded focus:ring-primary border-gray-300"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Tell us more
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
            placeholder="What brings you here? What are you hoping to achieve?"
          />
        </div>

        {/* Newsletter */}
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            {...register('newsletter')}
            type="checkbox"
            className="w-4 h-4 text-primary rounded focus:ring-primary border-gray-300"
          />
          <span className="text-sm">Yes, keep me updated on events and opportunities</span>
        </label>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500">
          Your information is secure and will only be used for French Innovation Club Croatia activities.
        </p>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            'Join the Community'
          )}
        </Button>
      </form>
    </Card>
  );
};

export default JoinForm;