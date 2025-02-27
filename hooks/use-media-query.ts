"use client";

import { useEffect, useState } from "react";

// Optimized useMediaQuery hook with a debounce mechanism to prevent excessive re-rendering
export function useMediaQuery(query: string, defaultValue: boolean = false): boolean {
  // Start with a server-friendly default value or provided default
  const [matches, setMatches] = useState<boolean>(defaultValue);
  
  useEffect(() => {
    // Skip on server
    if (typeof window === 'undefined') return;
    
    // Debounce timeout to prevent rapid changes
    let debounceTimeout: NodeJS.Timeout;
    
    // Handle initial check
    const mediaQuery = window.matchMedia(query);
    
    // Update state with current value
    const updateMatches = (e: MediaQueryListEvent | MediaQueryList) => {
      // Clear any pending updates
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      
      // Set a small debounce to prevent rapid changes (e.g., during resize)
      debounceTimeout = setTimeout(() => {
        setMatches(e.matches);
      }, 50); // Small delay to batch potential rapid changes
    };
    
    // Initial check
    updateMatches(mediaQuery);
    
    // Add listener for changes
    const listener = (e: MediaQueryListEvent) => updateMatches(e);
    
    // Modern API
    mediaQuery.addEventListener("change", listener);
    
    // Cleanup
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      mediaQuery.removeEventListener("change", listener);
    };
  }, [query]); // Only re-run if query changes
  
  return matches;
}
