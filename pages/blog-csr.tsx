import { useEffect, useState } from 'react';
import { Post } from '../types';
import Layout from '../components/Layout';

export default function BlogCSR() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://jsonplaceholder.typicode.com/posts');
      const posts: Post[] = await res.json();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <h1>Server Side Rendering Example</h1>
      <h2>Blog Posts</h2>
      <h5>TIMESTAMP: {Date.now()}</h5>
      <h4>Latest Posts</h4>
      {!posts ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </Layout>
  );
}
