"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

interface YouTubeLiteProps {
  videoId: string;
  title?: string;
  thumbnailQuality?: 'default' | 'hq' | 'mq' | 'sd' | 'maxres';
  aspectRatio?: '16:9' | '4:3' | '1:1';
  className?: string;
}

export const YouTubeLite = ({
  videoId,
  title = "YouTube video player",
  thumbnailQuality = 'maxres',
  aspectRatio = '16:9',
  className = "",
}: YouTubeLiteProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}default.jpg`;
  
  // Determine padding based on aspect ratio
  const getPadding = () => {
    switch (aspectRatio) {
      case '16:9': return 'pb-[56.25%]'; // 9/16 = 0.5625
      case '4:3': return 'pb-[75%]';     // 3/4 = 0.75
      case '1:1': return 'pb-[100%]';    // 1/1 = 1
      default: return 'pb-[56.25%]';
    }
  };

  const loadVideo = () => {
    setIsLoaded(true);
    if (iframeRef.current) {
      iframeRef.current.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={`relative w-full ${getPadding()} h-0 rounded-2xl overflow-hidden`}>
        {!isLoaded ? (
          <button
            onClick={loadVideo}
            className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer bg-black"
            aria-label={`Play ${title}`}
          >
            <Image
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        ) : (
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};
