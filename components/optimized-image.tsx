'use client';

import { useState, useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  blur?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  blur = true,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { 
    rootMargin: '200px',
    threshold: 0.1
  });
  
  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      style={{ position: 'relative' }}
    >
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            blur && 'transition-all duration-500',
            blur && !isLoaded && 'blur-xs scale-105',
            className
          )}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      )}
      {isInView && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
