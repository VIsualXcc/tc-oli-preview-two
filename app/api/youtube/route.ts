import { getYouTubeVideoDetails } from '@/lib/api/youtube';
import { NextRequest, NextResponse } from 'next/server';

/**
 * API route handler for fetching YouTube video details
 * @param request The incoming request with videoId query parameter
 * @returns JSON response with video details or error
 */
export async function GET(request: NextRequest) {
  // Get the video ID from the query string
  const searchParams = request.nextUrl.searchParams;
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.json(
      { error: 'Missing videoId parameter' },
      { status: 400 }
    );
  }

  try {
    const videoDetails = await getYouTubeVideoDetails(videoId);
    
    if (!videoDetails) {
      return NextResponse.json(
        { error: 'Video details not found' },
        { status: 404 }
      );
    }

    // Return the video details with proper caching headers
    return NextResponse.json(videoDetails, {
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200', // Cache for 24 hours, stale for 12
      },
    });
  } catch (error) {
    console.error('Error in YouTube API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch video details' },
      { status: 500 }
    );
  }
}
