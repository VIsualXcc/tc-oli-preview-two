'use client';

import { useEffect, useState } from 'react';

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Nutze requestIdleCallback für weniger CPU-Last während des Ladens
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      // requestIdleCallback für sanftes Mounting nutzen
      window.requestIdleCallback(() => {
        setIsMounted(true);
      });
    } else {
      // Fallback für Browser ohne requestIdleCallback
      setTimeout(() => setIsMounted(true), 100);
    }

    // Cleanup wenn die Komponente unmounted wird
    return () => {
      // Keine explizite Bereinigung notwendig
    };
  }, []);

  // Renderingoptimierung für React 19
  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}