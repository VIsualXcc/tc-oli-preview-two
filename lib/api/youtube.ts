/**
 * YouTube API utility functions
 * Fetches video details using the YouTube Data API
 */

export type YouTubeVideoDetails = {
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
    standard?: { url: string; width: number; height: number };
    maxres?: { url: string; width: number; height: number };
  };
  channelTitle: string;
};

/**
 * Fetches video details from YouTube API
 * @param videoId YouTube video ID
 * @returns Video details or null if not found
 */
export async function getYouTubeVideoDetails(videoId: string): Promise<YouTubeVideoDetails | null> {
  try {
    // Use server-side API key from environment variables
    const apiKey = process.env.YOUTUBE_SECRET;
    
    if (!apiKey) {
      console.error('YouTube API key is missing');
      return null;
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${apiKey}`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      console.error('No video found with ID:', videoId);
      return null;
    }

    const videoDetails = data.items[0].snippet;
    return videoDetails as YouTubeVideoDetails;
  } catch (error) {
    console.error('Error fetching YouTube video details:', error);
    return null;
  }
}
