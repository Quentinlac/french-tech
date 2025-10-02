import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  accent?: 'primary' | 'secondary' | 'accent' | 'none';
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = false, accent = 'none', ...props }, ref) => {
    const accentColors = {
      primary: 'before:bg-gradient-to-r before:from-primary/20 before:to-primary/5',
      secondary: 'before:bg-gradient-to-r before:from-secondary/20 before:to-secondary/5',
      accent: 'before:bg-gradient-to-r before:from-accent/20 before:to-accent/5',
      none: '',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6',
          'border border-white/20 dark:border-gray-700/30',
          'shadow-lg shadow-gray-900/5 dark:shadow-gray-900/20',
          hover && 'transition-all duration-300 ease-smooth hover:shadow-2xl hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-gray-900/60',
          accent !== 'none' && 'before:absolute before:inset-x-0 before:top-0 before:h-1 before:rounded-t-2xl',
          accent !== 'none' && accentColors[accent],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
