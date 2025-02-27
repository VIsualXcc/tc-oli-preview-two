import { getYouTubeVideoDetails } from '@/lib/api/youtube';
import EnhancedYouTube from './enhanced-youtube';

interface YouTubeWrapperProps {
  videoId: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  className?: string;
}

/**
 * Server component wrapper for EnhancedYouTube
 * Fetches video details on the server side when possible
 */
export default async function YouTubeWrapper({
  videoId,
  title,
  aspectRatio,
  className,
}: YouTubeWrapperProps) {
  // Try to fetch the video details on the server
  let videoDetails = null;
  
  try {
    videoDetails = await getYouTubeVideoDetails(videoId);
  } catch (error) {
    console.error('Error fetching YouTube data on server:', error);
    // Continue with null videoDetails, will fetch on client
  }

  return (
    <EnhancedYouTube
      videoId={videoId}
      title={title}
      aspectRatio={aspectRatio}
      className={className}
      initialVideoDetails={videoDetails}
    />
  );
}
