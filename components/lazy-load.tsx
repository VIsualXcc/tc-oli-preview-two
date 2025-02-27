'use client';

import { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  height?: string | number;
}

export default function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = '200px',
  className = '',
  height = 'auto',
}: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold, rootMargin });

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        minHeight: isInView ? 'auto' : height,
        transition: 'min-height 0.3s ease-in-out',
      }}
    >
      {isInView ? children : null}
    </div>
  );
}
