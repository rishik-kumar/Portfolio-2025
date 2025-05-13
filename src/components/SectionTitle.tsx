
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'left',
  className
}: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      <h2 className="section-title animate-fade-in-up">{title}</h2>
      {subtitle && (
        <p className="section-subtitle animate-fade-in-up">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
