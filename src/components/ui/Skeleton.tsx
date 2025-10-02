import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  width,
  height,
  ...props
}) => {
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style = {
    ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200 dark:bg-gray-700',
        variantClasses[variant],
        className
      )}
      style={style}
      {...props}
    />
  );
};

// Composite Skeleton Components for common use cases
export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800', className)}>
    <Skeleton className="h-48 mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6" />
  </div>
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ lines = 3, className }) => (
  <div className={className}>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton
        key={index}
        className={cn('h-4 mb-2', index === lines - 1 ? 'w-3/4' : 'w-full')}
      />
    ))}
  </div>
);

export const SkeletonAvatar: React.FC<{ size?: number; className?: string }> = ({ size = 40, className }) => (
  <Skeleton variant="circular" width={size} height={size} className={className} />
);

export default Skeleton;
