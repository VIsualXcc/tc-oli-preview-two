"use client";

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeSimpleProps {
  videoId: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  className?: string;
}

/**
 * A simple, optimized YouTube player with thumbnail preview
 * - Uses static thumbnails from YouTube
 * - Only loads the iframe when the user clicks play
 * - Uses youtube-nocookie.com for better privacy and performance
 */
export default function YouTubeSimple({
  videoId,
  title = "YouTube video player",
  aspectRatio = '16:9',
  className = "",
}: YouTubeSimpleProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Determine padding based on aspect ratio
  const getPadding = () => {
    switch (aspectRatio) {
      case '16:9': return 'pb-[56.25%]'; // 9/16 = 0.5625
      case '4:3': return 'pb-[75%]';     // 3/4 = 0.75
      case '1:1': return 'pb-[100%]';    // 1/1 = 1
      default: return 'pb-[56.25%]';
    }
  };

  // Load video when play button is clicked
  const loadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={`relative w-full ${getPadding()} h-0 rounded-2xl overflow-hidden`}>
        {!isLoaded ? (
          <button
            onClick={loadVideo}
            className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer bg-black"
            aria-label={`Play ${title}`}
            type="button"
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              quality={85}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-30 transition-all duration-300"></div>
            
            {/* Play button */}
            <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
