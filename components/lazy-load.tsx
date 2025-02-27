'use client';

import { useRef, ReactNode, useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  height?: string | number;
  priority?: boolean;
  delay?: number;
}

export default function LazyLoad({
  children,
  threshold = 0.01, // Niedrigerer Schwellenwert für früheres Laden
  rootMargin = '400px', // Erhöhter Bereich für früheres Laden
  className = '',
  height = 'auto',
  priority = false,
  delay = 0,
}: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold, rootMargin });
  const [shouldRender, setShouldRender] = useState(priority);
  const [hasMounted, setHasMounted] = useState(false);

  // Bei serverseitigem Rendering
  useEffect(() => {
    setHasMounted(true);
    
    // Mit der Webpage Lifecycle API arbeiten, falls verfügbar
    if (priority) {
      setShouldRender(true);
      return;
    }
    
    // Bei nicht-priorisierten aber kritischen Komponenten 
    // requestIdleCallback nutzen, wenn verfügbar
    try {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        // @ts-ignore - TypeScript kennt requestIdleCallback nicht automatisch
        window.requestIdleCallback(
          () => {
            if (isInView) {
              setShouldRender(true);
            }
          },
          { timeout: 2000 } // 2 Sekunden Timeout
        );
      } else {
        // Fallback
        setTimeout(() => {
          if (isInView) {
            setShouldRender(true);
          }
        }, 200);
      }
    } catch (e) {
      // Fallback falls requestIdleCallback fehlt
      if (isInView) {
        setShouldRender(true);
      }
    }
  }, [priority, isInView]);
  
  // Verhalten bei Sichtbarkeit
  useEffect(() => {
    if (!isInView || shouldRender || !hasMounted) return;
    
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [isInView, shouldRender, delay, hasMounted]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        minHeight: shouldRender ? 'auto' : height,
        transition: 'min-height 0.3s ease-in-out',
        width: '100%',
        display: 'block',
        position: 'relative'
      }}
      aria-hidden={!shouldRender}
    >
      {(shouldRender || (isInView && hasMounted)) ? children : null}
    </div>
  );
}
