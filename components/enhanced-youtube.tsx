"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { YouTubeVideoDetails } from '@/lib/api/youtube';

// Static thumbnail placeholder function that doesn't rely on API
const getYouTubeThumbnailUrl = (videoId: string, quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'maxres') => {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
};

interface EnhancedYouTubeProps {
  videoId: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  className?: string;
  placeholder?: boolean;
  initialVideoDetails?: YouTubeVideoDetails | null;
}

/**
 * Performance-optimized YouTube component
 * - Loads thumbnails from YouTube API
 * - Uses next/image for optimized image loading
 * - Defers loading the YouTube iframe until user interaction
 * - Uses youtube-nocookie.com for better privacy and performance
 */
export default function EnhancedYouTube({
  videoId,
  title = "YouTube video player",
  aspectRatio = '16:9',
  className = "",
  placeholder = false,
  initialVideoDetails = null,
}: EnhancedYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoDetails, setVideoDetails] = useState<YouTubeVideoDetails | null>(initialVideoDetails);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Determine padding based on aspect ratio
  const getPadding = () => {
    switch (aspectRatio) {
      case '16:9': return 'pb-[56.25%]'; // 9/16 = 0.5625
      case '4:3': return 'pb-[75%]';     // 3/4 = 0.75
      case '1:1': return 'pb-[100%]';    // 1/1 = 1
      default: return 'pb-[56.25%]';
    }
  };

  // Determine best thumbnail to use (prefer maxres, fall back to high)
  const getThumbnailUrl = () => {
    if (videoDetails?.thumbnails?.maxres) {
      return videoDetails.thumbnails.maxres.url;
    } else if (videoDetails?.thumbnails?.standard) {
      return videoDetails.thumbnails.standard.url;
    } else if (videoDetails?.thumbnails?.high) {
      return videoDetails.thumbnails.high.url;
    }
    // Fallback to direct YouTube image URL if we don't have video details
    return getYouTubeThumbnailUrl(videoId);
  };

  // Load video when play button is clicked
  const loadVideo = () => {
    setIsLoaded(true);
    if (iframeRef.current) {
      iframeRef.current.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    }
  };

  // For client-side loading of video details if not provided server-side
  useEffect(() => {
    // Temporarily disabled to prevent 403 errors
    // We'll just use the static thumbnail approach
    
    // Uncomment this when the API key is properly configured:
    // if (!videoDetails && !placeholder && typeof window !== 'undefined') {
    //   const loadVideoDetails = async () => {
    //     try {
    //       const response = await fetch(`/api/youtube?videoId=${videoId}`);
    //       if (response.ok) {
    //         const data = await response.json();
    //         setVideoDetails(data);
    //       }
    //     } catch (error) {
    //       console.error('Error loading video details:', error);
    //     }
    //   };
    //   
    //   loadVideoDetails();
    // }
  }, [videoId, videoDetails, placeholder]);

  return (
    <div className={`w-full ${className}`}>
      <div className={`relative w-full ${getPadding()} h-0 rounded-2xl overflow-hidden`}>
        {!isLoaded ? (
          <button
            onClick={loadVideo}
            className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer bg-black"
            aria-label={`Play ${videoDetails?.title || title}`}
            type="button"
          >
            <Image
              src={getThumbnailUrl()}
              alt={videoDetails?.title || title}
              className="absolute inset-0 w-full h-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              quality={85}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-30 transition-all duration-300"></div>
            
            {/* Title overlay at bottom of thumbnail */}
            {videoDetails?.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 text-left">
                <p className="text-white font-medium text-sm md:text-base">{videoDetails.title}</p>
                {videoDetails.channelTitle && (
                  <p className="text-gray-300 text-xs">{videoDetails.channelTitle}</p>
                )}
              </div>
            )}
            
            {/* Play button */}
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
            title={videoDetails?.title || title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
