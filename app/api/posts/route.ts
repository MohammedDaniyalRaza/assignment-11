// API Route to fetch posts from JSONPlaceholder
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch posts from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Return the posts data
    return NextResponse.json(posts);
  } catch (error) {
    // Handle any errors that occur during the fetch
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}