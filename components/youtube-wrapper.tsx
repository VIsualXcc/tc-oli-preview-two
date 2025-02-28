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
  
  // Skip API call for now to prevent 403 errors
  // We'll just use the static thumbnail approach
  
  // Uncomment this when the API key is properly configured:
  // try {
  //   videoDetails = await getYouTubeVideoDetails(videoId);
  // } catch (error) {
  //   console.error('Error fetching YouTube data on server:', error);
  // }

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
