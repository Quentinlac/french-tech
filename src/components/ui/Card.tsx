import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-800',
          hover && 'transition-all duration-300 ease-smooth hover:shadow-2xl hover:-translate-y-2 hover:border-primary-200 dark:hover:border-primary-800',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;