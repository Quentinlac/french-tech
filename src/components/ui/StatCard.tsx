import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon: Icon,
  trend,
  className,
  color = 'primary'
}) => {
  const colorClasses = {
    primary: 'border-primary/20 bg-primary/5',
    secondary: 'border-secondary/20 bg-secondary/5',
    accent: 'border-accent/30 bg-accent/10'
  };

  const iconColorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent-dark'
  };

  return (
    <div className={cn(
      'h-full flex flex-col rounded-xl border-2 p-6 transition-all duration-200 hover:scale-105',
      colorClasses[color],
      className
    )}>
      {Icon && (
        <div className={cn('mb-3', iconColorClasses[color])}>
          <Icon size={24} />
        </div>
      )}
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{label}</div>
      {trend && (
        <div className="text-xs text-green-600 dark:text-green-400 mt-auto">{trend}</div>
      )}
    </div>
  );
};

export default StatCard;