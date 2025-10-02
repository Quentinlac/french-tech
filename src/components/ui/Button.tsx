import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-primary-400 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95',
      secondary: 'bg-secondary text-white hover:bg-secondary-600 focus:ring-secondary-400 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95',
      accent: 'bg-accent text-navy hover:bg-accent-600 focus:ring-accent-400 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-400 hover:shadow-md transform hover:scale-105 active:scale-95',
      ghost: 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400 hover:shadow-sm',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;