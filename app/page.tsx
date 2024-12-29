import { Post } from '@/lib/types';
import { PostsGrid } from '@/components/posts/posts-grid';

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              BlogPosts
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of posts fetched from JSONPlaceholder API
          </p>
        </div>
        
        <PostsGrid posts={posts} />
      </div>
    </div>
  );
}